export interface IFixture {
    id: string
    leagueId: string
    leagueLocalName: string
}

export interface IBet {
    id: string
}

export interface IMarket {
    id: string
    bets: IBet[][]
}

export interface ILivescore {
    id: string
}

export interface IEvent<F extends IFixture, M extends IMarket, L extends ILivescore> {
    fixture: F
    markets: M[]
    livescore?: L | null
}

enum SubscriptionMessageType {
    reset = "reset",
    addOrUpdateEvents = "addOrUpdateEvents",
    addOrUpdateMarkets = "addOrUpdateMarkets",
    updateLivescores = "updateLivescores",
    deleteEvents = "deleteEvents",
    deleteMarkets = "deleteMarkets",
}
export interface IEventsWithLeagueGroup<F extends IFixture, M extends IMarket, L extends ILivescore> {
    leagueId: string
    leagueLocalName: string
    eventsCount: number
    hasData: boolean
    events: IEvent<F, M, L>[]
}

export interface IEventSubscription<F extends IFixture, M extends IMarket, L extends ILivescore> {
    type: string
    fixtureId: string
    fixture?: F | null
    markets?: M[] | null
    livescore?: L | null
}


function updateEvent<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, newEvent: IEventSubscription<F, M, L>): IEvent<F, M, L> {
    return {
        ...previous,
        fixture: newEvent.fixture ?? previous.fixture,
        markets: newEvent.markets ?? previous.markets,
        livescore: newEvent.livescore ?? previous.livescore,
    }
}
function addOrUpdateMarkets<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, subscription: IEventSubscription<F, M, L>): IEvent<F, M, L> {
    if (!subscription.markets) {
        return previous
    }
    if (!previous.markets) {
        return {
            ...previous,
            markets: subscription.markets,
        }
    }
    const updatedMarkets = previous.markets
    
    const newMarkets = subscription.markets

    let found: boolean
    newMarkets.forEach(newMarket => {
        found = false
        for (let i = 0; i < updatedMarkets.length; i++) {
            const um = updatedMarkets[i]
            if (um.id === newMarket.id) {
                updatedMarkets[i] = newMarket
                found = true
                break
            }
        }
        if (!found) {
            updatedMarkets.push(newMarket)
        }
    })
    return {
        ...previous,
        markets: [...updatedMarkets],
    }
}
function deleteMarkets<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, subscription: IEventSubscription<F, M, L>): IEvent<F, M, L> {
    if (!previous.markets || !subscription.markets) {
        // 本來就沒markets，相當於不用更新
        return previous
    }
    return {
        ...previous,
        markets: previous.markets.filter(m => !subscription.markets?.find(deletedMarket => deletedMarket.id === m.id)),
    }
}

function cloneEvent<F extends IFixture, M extends IMarket, L extends ILivescore>(event: IEvent<F, M, L>): IEvent<F, M, L> {
    return {
        ...event,
        fixture: event.fixture,
        markets: event.markets,
        livescore: event.livescore ? {
            ...event.livescore,
        } : undefined,
    }
}

function subscriptionsToPrependGroups<F extends IFixture, M extends IMarket, L extends ILivescore>(subscriptions: IEventSubscription<F, M, L>[]): IEventsWithLeagueGroup<F, M, L>[] {

    const output: IEventsWithLeagueGroup<F, M, L>[] = []

    subscriptions.forEach(s => {
        if (!s.fixture) {
            return
        }
        const exists = output.find(el => el.leagueId === s.fixture?.leagueId)
        if (exists) {
            exists.events.push({
                fixture: s.fixture,
                markets: s.markets ?? [],
                livescore: s.livescore ?? undefined,
            })
            return
        }

        output.push({
            leagueId: s.fixture.leagueId,
            leagueLocalName: s.fixture.leagueLocalName,
            eventsCount: 1,
            hasData: true,
            events: [{
                fixture: s.fixture,
                markets: s.markets ?? [],
                livescore: s.livescore ?? undefined,
            }],
        })
    })

    output.forEach(row => row.eventsCount = row.events.length)

    return output
}

export function reduceEventSubscriptions<F extends IFixture, M extends IMarket, L extends ILivescore>(
    data: IEventsWithLeagueGroup<F, M, L>[], eventSubscriptions: IEventSubscription<F, M, L>[]): IEventsWithLeagueGroup<F, M, L>[] {

    const eventsMap: { [key: string]: IEvent<F, M, L> } = {}
    const updatedfixtureIds = new Set<string>()
    const deletedFixtureIds = new Set<string>()
    const prependSubscriptions: IEventSubscription<F, M, L>[] = []

    // 先用指標登錄，方便索引
    data.forEach(row => {
        row.events.forEach(event => {
            if (event.fixture) {
                eventsMap[event.fixture.id] = event
            }
        })
    })

    eventSubscriptions.forEach(msg => {
        switch (msg.type) {
        case SubscriptionMessageType.reset:
            // ignore
            break
        case SubscriptionMessageType.addOrUpdateEvents:
            const oldEvent = eventsMap[msg.fixtureId]
            if (!oldEvent) {
                // events原本就不存在 -> prepend
                prependSubscriptions.push(msg)
                break
            }

            // 找到event
            eventsMap[msg.fixtureId] = updateEvent(oldEvent, msg)
            updatedfixtureIds.add(msg.fixtureId)
                
            break
        case SubscriptionMessageType.addOrUpdateMarkets:
            const oldEventForMarket = eventsMap[msg.fixtureId]
            if (!oldEventForMarket) {
                // 找不到就不要更新
                break
            }
            eventsMap[msg.fixtureId] = addOrUpdateMarkets(oldEventForMarket, msg)
            updatedfixtureIds.add(msg.fixtureId)

            break

        case SubscriptionMessageType.updateLivescores:
            if (!msg.livescore) {
                break
            }
            const oldEventForLivescore = eventsMap[msg.fixtureId]
            if (!oldEventForLivescore) {
                // 找不到就不要更新
                break
            }

            oldEventForLivescore.livescore = msg.livescore
            updatedfixtureIds.add(msg.fixtureId)


            break
        case SubscriptionMessageType.deleteEvents:
            if (eventsMap[msg.fixtureId]) {
                deletedFixtureIds.add(msg.fixtureId)
            }
            break
        case SubscriptionMessageType.deleteMarkets:
            const oldEventForDeleteMarket = eventsMap[msg.fixtureId]
            if (!oldEventForDeleteMarket) {
                // 找不到就不要更新
                break
            }
            eventsMap[msg.fixtureId] = deleteMarkets(oldEventForDeleteMarket, msg)
            updatedfixtureIds.add(msg.fixtureId)
            break
        
        default:
            console.log(`unknown message type: ${msg.type}`)
            break
        }
    })

    const prepends = subscriptionsToPrependGroups(prependSubscriptions)
    return [...prepends, ...data.map(row => {
        return {
            ...row,
            events: row.events.filter(event => !deletedFixtureIds.has(event.fixture.id)).map(event => {
                if (event.fixture && updatedfixtureIds.has(event.fixture.id)) {
                    return cloneEvent(eventsMap[event.fixture.id])
                }
                return event
            }),
        }
    })]
}
