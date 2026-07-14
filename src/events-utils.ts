import Decimal from "decimal.js"

export interface ILeague {
    id: string
    weight: number
}

export interface IFixture {
    id: string
    isHot: boolean
    startedAt?: string | Date | null
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
    marketType: number
    bets: (IBet | null | undefined)[][]
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
    league: F["league"]
    eventsCount: number
    eventsHotCount: number
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
    const previousMarketsMap: { [key: string]: number } = {}
    updatedMarkets.forEach((market, idx) => {
        previousMarketsMap[market.id] = idx
    })
    
    const newMarkets = subscription.markets
    
    let shouldSort = false
    newMarkets.forEach(newMarket => {
        const previousMarketIdx = previousMarketsMap[newMarket.id]
        if (previousMarketIdx === undefined) {
            updatedMarkets.push(newMarket)
            shouldSort = true
        } else {
            // compare bet price first
            const previousMarket = updatedMarkets[previousMarketIdx]
            const previousMarketBetsMap: { [key: string]: IBet } = {}
            previousMarket.bets.forEach(row => {
                row.forEach(bet => {
                    if (bet) {
                        previousMarketBetsMap[bet.id] = bet
                    }
                })
            })
            
            newMarket.bets.forEach(row => {
                row.forEach(bet => {
                    if (!bet) {
                        return
                    }
                    const previousBet = previousMarketBetsMap[bet.id]
                    if (!previousBet) {
                        return   
                    }
                    const previousPrice = new Decimal(previousBet.actualPrice)
                    const afterPrice = new Decimal(bet.actualPrice)
                    if (previousPrice.eq(afterPrice)) {
                        return
                    }
                    bet.isPriceHigher = afterPrice.greaterThan(previousPrice)
                })
            })
            updatedMarkets[previousMarketIdx] = newMarket
        }
    })
    
    if (shouldSort) {
        updatedMarkets.sort((a, b) => {
            return a.marketType - b.marketType
        })
    }
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
    const exists = output.find(el => el.leagueId === subscription.fixture?.league.id)
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
        exists.eventsCount = exists.events.length
        exists.eventsHotCount = exists.events.filter(event => event.fixture.isHot).length
        return newEvent
    }

    // 沒找到league就新增league
    output.push({
        leagueId: subscription.fixture.league.id,
        leagueLocaleName: subscription.fixture.leagueLocaleName,
        league: subscription.fixture.league,
        eventsCount: 1,
        eventsHotCount: subscription.fixture.isHot ? 1 : 0,
        // 使用false讓UI不要展開此項目
        hasData: false,
        events: [newEvent],
    })
    // sort leagues by weight DESC, 如果events[0]不存在就排後面
    output.sort((a, b) => (b.events[0]?.fixture.league.weight ?? 0) - (a.events[0]?.fixture.league.weight ?? 0))

    return newEvent
}

export function addOrUpdateSingleEventGroup<F extends IFixture, M extends IMarket, L extends ILivescore>(
    data: IEventsWithLeagueGroup<F, M, L>[], singleEventGroup: IEventsWithLeagueGroup<F, M, L>): IEventsWithLeagueGroup<F, M, L>[] {

    // 先shallow copy一份，避免影響到原本的data
    // 接著對output做inplace修改來提升效率
    const output: IEventsWithLeagueGroup<F, M, L>[] = [...data]

    const existsIdx = output.findIndex(el => el.leagueId === singleEventGroup.leagueId)
    if (existsIdx === -1) {
        output.push(singleEventGroup)
        output.sort((a, b) => (b.events[0]?.fixture.league.weight ?? 0) - (a.events[0]?.fixture.league.weight ?? 0))
    } else {
        output[existsIdx] = singleEventGroup
    }

    return output
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
                    updatedfixtureIds.add(msg.fixtureId)
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
            let removeIndex = -1
            for (let idx = 0; idx < output.length; idx++) {
                const row = output[idx]
                // 檢查該 fixture 是否存在於此 row 中
                const targetIndex = row.events.findIndex(event => event.fixture.id === msg.fixtureId)
                if (targetIndex !== -1) {
                    // 建立一個新的 events array 避免 mutate 到原本的 data 陣列 (shallow copy 概念)
                    row.events = [
                        ...row.events.slice(0, targetIndex),
                        ...row.events.slice(targetIndex + 1),
                    ]
                    // 只把有變動的 group 的 eventsCount 減 1，避免在 hasData 為 false 時數量計算錯誤
                    row.eventsCount = Math.max(0, row.eventsCount - 1)
                    row.eventsHotCount = row.events.filter(e => e.fixture.isHot).length
                    
                    // 如果整個 group 沒有賽事了，記錄下來以便移除
                    if (row.eventsCount === 0) {
                        removeIndex = idx
                    }
                    // 一個事件只會屬於一個聯盟，找到即可跳出迴圈
                    break
                }
            }
            if (removeIndex !== -1) {
                output.splice(removeIndex, 1)
            }
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

/**
 * 針對單一 IEvent 套用 eventSubscriptions 並回傳更新後的 event。
 * 只處理 fixtureId 與 data.fixture.id 相符的 subscription。
 * 若收到 deleteEvents 類型，回傳 null 表示該 event 已被刪除。
 */
export function reduceEventSubscriptionsForSingleEvent<F extends IFixture, M extends IMarket, L extends ILivescore>(
    data: IEvent<F, M, L>, eventSubscriptions: IEventSubscription<F, M, L>[],
): IEvent<F, M, L> | null {

    const fixtureId = data.fixture?.id
    if (!fixtureId) {
        return data
    }

    // 先clone一份，避免影響到原本的data，接著對clone做inplace修改來提升效率
    // 需要額外 shallow copy markets 陣列，因為 addOrUpdateMarketsInplace 會 push 新元素
    const event: IEvent<F, M, L> = {
        ...cloneEvent(data),
        markets: data.markets ? [...data.markets] : [],
    }
    let updated = false
    let deleted = false

    eventSubscriptions.forEach(msg => {
        // 只處理 fixtureId 相符的 subscription
        if (msg.fixtureId !== fixtureId) {
            return
        }

        switch (msg.type) {
        case SubscriptionMessageType.reset:
            // ignore
            break
        case SubscriptionMessageType.addOrUpdateEvents:
            updateEventInplace(event, msg)
            updated = true
            break
        case SubscriptionMessageType.addOrUpdateMarkets:
            addOrUpdateMarketsInplace(event, msg)
            updated = true
            break
        case SubscriptionMessageType.updateLivescores:
            if (!msg.livescore) {
                break
            }
            event.livescore = msg.livescore
            updated = true
            break
        case SubscriptionMessageType.deleteEvents:
            deleted = true
            break
        case SubscriptionMessageType.deleteMarkets:
            deleteMarketsInplace(event, msg)
            updated = true
            break
        default:
            console.log(`unknown message type: ${msg.type}`)
            break
        }
    })

    if (deleted) {
        return null
    }

    // 如果有更新過就回傳clone後的event，否則回傳原本的data
    return updated ? event : data
}
