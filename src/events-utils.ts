import Decimal from "decimal.js"

export interface ILeague {
    id: string
    weight: number
}

export interface IFixture {
    id: string
    startedAt?: string | Date
    leagueId: string
    leagueLocaleName: string
    league: ILeague
}

export interface IBet {
    id: string
    isPriceHigher?: boolean | null
    actualPrice: string
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
    leagueLocaleName: string
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

function updateEventInplace<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, newEvent: IEventSubscription<F, M, L>): void {
    if (newEvent.fixture) {
        previous.fixture = newEvent.fixture
    }
    if (newEvent.markets) {
        previous.markets = newEvent.markets
    }
    if (newEvent.livescore) {
        previous.livescore = newEvent.livescore
    }
}

function addOrUpdateMarketsInplace<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, subscription: IEventSubscription<F, M, L>): void {
    if (!subscription.markets) {
        return
    }
    if (!previous.markets) {
        previous.markets = subscription.markets
        return
    }
    const updatedMarkets = previous.markets
    
    const newMarkets = subscription.markets

    let found: boolean
    newMarkets.forEach(newMarket => {
        found = false
        for (let i = 0; i < updatedMarkets.length; i++) {
            const um = updatedMarkets[i]
            if (um.id === newMarket.id) {
                const previousBetsMap: { [key: string]: IBet } = {}
                um.bets.forEach(rows => {
                    rows.forEach(bet => {
                        previousBetsMap[bet.id] = bet
                    })
                })
                newMarket.bets.forEach(rows => {
                    rows.forEach(bet => {
                        const previousBet = previousBetsMap[bet.id]
                        if (previousBet) {
                            const previousPrice = new Decimal(previousBet.actualPrice)
                            const currentPrice = new Decimal(bet.actualPrice)
                            if (currentPrice.gt(previousPrice)) {
                                bet.isPriceHigher = true
                            } else if (currentPrice.lt(previousPrice)) {
                                bet.isPriceHigher = false
                            } else {
                                bet.isPriceHigher = null
                            }
                        }
                    })
                })
                updatedMarkets[i] = newMarket
                found = true
                break
            }
        }
        if (!found) {
            updatedMarkets.push(newMarket)
        }
    })
}


function deleteMarketsInplace<F extends IFixture, M extends IMarket, L extends ILivescore>(previous: IEvent<F, M, L>, subscription: IEventSubscription<F, M, L>): void {
    if (!previous.markets || !subscription.markets) {
        return
    }
    previous.markets = previous.markets.filter(m => !subscription.markets?.find(deletedMarket => deletedMarket.id === m.id))
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

// output的更新為inplace, 不過該function還是會回傳新的Event
function addEventInplace<F extends IFixture, M extends IMarket, L extends ILivescore>(
    output: IEventsWithLeagueGroup<F, M, L>[],
    subscription: IEventSubscription<F, M, L>,
): IEvent<F, M, L> | null {
    if (!subscription.fixture) {
        return null
    }

    const newEvent = {
        fixture: subscription.fixture,
        markets: subscription.markets ?? [],
        livescore: subscription.livescore ?? undefined,
    }

    // 有找到league就在league內新增event
    const exists = output.find(el => el.leagueId === subscription.fixture?.leagueId)
    if (exists) {
        if (!exists.hasData) {
            // 如果沒有data，代表這個group沒有展開，不需要更新他，否則一直新增下去，前端RAM會爆掉
            return null
        }
        exists.events.push(newEvent)
        // sort fixtures.startedAt ASC
        exists.events.sort((a, b) => {
            const aTime = a.fixture.startedAt ? new Date(a.fixture.startedAt).getTime() : 0
            const bTime = b.fixture.startedAt ? new Date(b.fixture.startedAt).getTime() : 0
            return aTime - bTime
        })
        return newEvent
    }

    // 沒找到league就新增league
    output.push({
        leagueId: subscription.fixture.leagueId,
        leagueLocaleName: subscription.fixture.leagueLocaleName,
        eventsCount: 1,
        // 使用false讓UI不要展開此項目
        hasData: false,
        events: [newEvent],
    })
    // sort leagues by weight DESC, 如果events[0]不存在就排後面
    output.sort((a, b) => (b.events[0]?.fixture.league.weight ?? 0) - (a.events[0]?.fixture.league.weight ?? 0))

    return newEvent
}

export function reduceEventSubscriptions<F extends IFixture, M extends IMarket, L extends ILivescore>(
    data: IEventsWithLeagueGroup<F, M, L>[], eventSubscriptions: IEventSubscription<F, M, L>[]): IEventsWithLeagueGroup<F, M, L>[] {

    // fixtureId -> event
    const eventsMap: { [key: string]: IEvent<F, M, L> } = {}
    const updatedfixtureIds = new Set<string>()

    // 先shallow copy一份，避免影響到原本的data
    // 接著對output做inplace修改來提升效率
    const output: IEventsWithLeagueGroup<F, M, L>[] = [...data]

    // 先用指標登錄，方便索引
    output.forEach(row => {
        if (!row.hasData) {
            // 如果沒有data，代表這個group沒有展開，不需要對裡面做任何操作
            return
        }
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
                // events原本就不存在 -> add
                const newEvent = addEventInplace(output, msg)
                if (newEvent) {
                    eventsMap[msg.fixtureId] = newEvent
                }
                break
            }

            // 找到event
            updateEventInplace(oldEvent, msg)
            updatedfixtureIds.add(msg.fixtureId)
                
            break
        case SubscriptionMessageType.addOrUpdateMarkets:
            const oldEventForMarket = eventsMap[msg.fixtureId]
            if (!oldEventForMarket) {
                // 找不到就不要更新
                break
            }
            addOrUpdateMarketsInplace(oldEventForMarket, msg)
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
            delete eventsMap[msg.fixtureId]
            output.forEach(row => {
                if (row.events.find(event => event.fixture.id === msg.fixtureId)) {
                    row.events = row.events.filter(event => event.fixture.id !== msg.fixtureId)
                }
            })
            break
        case SubscriptionMessageType.deleteMarkets:
            const oldEventForDeleteMarket = eventsMap[msg.fixtureId]
            if (!oldEventForDeleteMarket) {
                // 找不到就不要更新
                break
            }
            deleteMarketsInplace(oldEventForDeleteMarket, msg)
            updatedfixtureIds.add(msg.fixtureId)
            break
        
        default:
            console.log(`unknown message type: ${msg.type}`)
            break
        }
    })

    return [...output.map(row => {
        return {
            ...row,
            events: row.events.map(event => {
                // 如果該event有被更新過，就clone一份新的event比較安全
                if (event.fixture && updatedfixtureIds.has(event.fixture.id)) {
                    return cloneEvent(eventsMap[event.fixture.id])
                }
                return event
            }),
        }
    })]
}
