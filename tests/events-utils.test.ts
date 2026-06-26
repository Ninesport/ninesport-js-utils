import { reduceEventSubscriptions, reduceEventSubscriptionsForSingleEvent } from "../src/events-utils"

const initState = [
    {
        "leagueLocaleName": "Great Britain. General Election. Rhondda and Ogmore constituency. Winner",
        "league": {
            "id": "23708",
            "weight": 1,
        },
        "eventsCount": 1,
        "eventsHotCount": 1,
        "hasData": true,
        "events": [
            {
                "markets": [
                    {
                        "marketTypeLocaleName": "1X2",
                        "mainLine": null,
                        "betOptionLocaleNames": [
                            "name.betOptions.X",
                        ],
                        "bets": [
                            [
                                {
                                    "localeName": "Orenburg W",
                                    "marketTypeLocaleName": "1X2",
                                    "statusLocaleName": "Open",
                                    "line": null,
                                    "baseLine": null,
                                    "actualPrice": "1.2356",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": "Orenburg W",
                                    "settlementTypeLocaleName": null,
                                    "id": "1395048",
                                    "name": "1",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 1,
                                    "marketId": "294127",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": "635",
                                    "settlementType": null,
                                },
                            ],
                            [
                                {
                                    "localeName": "平手",
                                    "marketTypeLocaleName": "1X2",
                                    "statusLocaleName": "Open",
                                    "line": null,
                                    "baseLine": null,
                                    "actualPrice": "7.2269",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": null,
                                    "settlementTypeLocaleName": null,
                                    "id": "1395049",
                                    "name": "X",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 1,
                                    "marketId": "294127",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": null,
                                    "settlementType": null,
                                },
                            ],
                            [
                                {
                                    "localeName": "Johanne C Svendsen",
                                    "marketTypeLocaleName": "1X2",
                                    "statusLocaleName": "Open",
                                    "line": null,
                                    "baseLine": null,
                                    "actualPrice": "16.0468",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": "Johanne C Svendsen",
                                    "settlementTypeLocaleName": null,
                                    "id": "1395047",
                                    "name": "2",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 1,
                                    "marketId": "294127",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": "636",
                                    "settlementType": null,
                                },
                            ],
                        ],
                        "id": "294127",
                        "fixtureId": "18825",
                        "marketType": 1,
                        "isHot": false,
                    },
                    {
                        "marketTypeLocaleName": "Asian Handicap",
                        "mainLine": "-2.0 (0-0)",
                        "betOptionLocaleNames": null,
                        "bets": [
                            [
                                {
                                    "localeName": "Orenburg W",
                                    "marketTypeLocaleName": "Asian Handicap",
                                    "statusLocaleName": "Open",
                                    "line": "-1.25 (0-0)",
                                    "baseLine": "-1.25 (0-0)",
                                    "actualPrice": "1.4779",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": "Orenburg W",
                                    "settlementTypeLocaleName": null,
                                    "id": "1399539",
                                    "name": "1",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 3,
                                    "marketId": "294791",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": "635",
                                    "settlementType": null,
                                },
                            ],
                            [
                                {
                                    "localeName": "Johanne C Svendsen",
                                    "marketTypeLocaleName": "Asian Handicap",
                                    "statusLocaleName": "Open",
                                    "line": "1.25 (0-0)",
                                    "baseLine": "-1.25 (0-0)",
                                    "actualPrice": "2.9996",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": "Johanne C Svendsen",
                                    "settlementTypeLocaleName": null,
                                    "id": "1399540",
                                    "name": "2",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 3,
                                    "marketId": "294791",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": "636",
                                    "settlementType": null,
                                },
                            ],
                        ],
                        "id": "294791",
                        "fixtureId": "18825",
                        "marketType": 3,
                        "isHot": false,
                    },
                    {
                        "marketTypeLocaleName": "Away Team to Score",
                        "mainLine": null,
                        "betOptionLocaleNames": [
                            "name.betOptions.No",
                            "name.betOptions.Yes",
                        ],
                        "bets": [
                            [
                                {
                                    "localeName": "name.bets.No",
                                    "marketTypeLocaleName": "Away Team to Score",
                                    "statusLocaleName": "Open",
                                    "line": null,
                                    "baseLine": null,
                                    "actualPrice": "1.5581",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": null,
                                    "settlementTypeLocaleName": null,
                                    "id": "1626473",
                                    "name": "No",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 22,
                                    "marketId": "323108",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": null,
                                    "settlementType": null,
                                },
                            ],
                            [
                                {
                                    "localeName": "name.bets.Yes",
                                    "marketTypeLocaleName": "Away Team to Score",
                                    "statusLocaleName": "Open",
                                    "line": null,
                                    "baseLine": null,
                                    "actualPrice": "2.7159",
                                    "suspensionReasonLocaleName": null,
                                    "participantLocaleName": null,
                                    "settlementTypeLocaleName": null,
                                    "id": "1626474",
                                    "name": "Yes",
                                    "isOutright": false,
                                    "settledAt": null,
                                    "marketType": 22,
                                    "marketId": "323108",
                                    "fixtureId": "18825",
                                    "status": 1,
                                    "isPriceHigher": null,
                                    "suspensionReason": null,
                                    "participantId": null,
                                    "settlementType": null,
                                },
                            ],
                        ],
                        "id": "323108",
                        "fixtureId": "18825",
                        "marketType": 22,
                        "isHot": false,
                    },
                ],
                "fixture": {
                    "hasStream": true,
                    "participants": [
                        {
                            "id": "636",
                            "localeName": "Johanne C Svendsen",
                            "position": 1,
                        },
                        {
                            "id": "635",
                            "localeName": "Orenburg W",
                            "position": 2,
                        },
                    ],
                    "isOutright": false,
                    "isHot": true,
                    "id": "18825",
                    "locationLocaleName": "International",
                    "leagueLocaleName": "Great Britain. General Election. Rhondda and Ogmore constituency. Winner",
                    "eventStatusLocaleName": "Not Started Yet",
                    "startedAt": "2025-10-06T01:00:00+08:00",
                    "lsportsId": "16868403",
                    "sportId": 56,
                    "sportLocaleName": "soccer",
                    "locationId": "251",
                    "eventStatus": 1,
                    "leagueId": "23708",
                    "league": {
                        "id": "23708",
                        "weight": 1,
                    },
                    "statscoreWidgetId": "",
                },
                "livescore": {
                    "id": "5314",
                    "sportId": 56,
                    "elapsedTimeInSeconds": 550,
                    "currentServingPosition": null,
                    "periods": [],
                    "eventStatus": 1,
                },
            },
        ],
        "leagueId": "23708",
    },
]

const subscriptionDeleteFixture = {
    "type": "deleteEvents",
    "fixtureId": "18825",
    "fixture": initState[0].events[0].fixture,
    "livescore": {
        "id": "5314",
        "sportId": 56,
        "elapsedTimeInSeconds": 550,
        "currentServingPosition": null,
        "periods": [],
        "eventStatus": 1,
    },
    "markets": initState[0].events[0].markets,
}

const addOrUpdateMarketsSubscription = {
    "type":"addOrUpdateMarkets",
    "fixtureId":"18825",
    "fixture": subscriptionDeleteFixture.fixture,
    "livescore": subscriptionDeleteFixture.livescore,
    "markets":[{ 
        "id":"406012",
        "fixtureId":"32023",
        "marketType":1,
        "marketTypeLocaleName":"1X2",
        "isHot":false,
        "mainLine":null,"betOptionLocaleNames":["name.betOptions.X"],
        "bets":[
            [
                { "id":"2218561","name":"1","localeName":"Uladzislava Famina / Polina Skopintseva","isOutright":false,"settledAt":null,"marketType":1,
                    "marketTypeLocaleName":"1X2","marketId":"406012","fixtureId":"32023","status":1,"statusLocaleName":"Open","line":null,"baseLine":null,
                    "actualPrice":"3.6694","suspensionReason":null,"suspensionReasonLocaleName":null,"participantId":"506",
                    "participantLocaleName":"Uladzislava Famina / Polina Skopintseva","settlementType":null,"settlementTypeLocaleName":null,
                    "isPriceHigher":null }],[{ "id":"2218560","name":"X","localeName":"平手","isOutright":false,"settledAt":null,"marketType":1,
                "marketTypeLocaleName":"1X2","marketId":"406012","fixtureId":"32023","status":1,"statusLocaleName":"Open","line":null,
                "baseLine":null,"actualPrice":"3.4332","suspensionReason":null,"suspensionReasonLocaleName":null,"participantId":null,
                "participantLocaleName":null,"settlementType":null,"settlementTypeLocaleName":null,"isPriceHigher":null }],[
                { "id":"2218562","name":"2","localeName":"King Coconut","isOutright":false,"settledAt":null,"marketType":1,"marketTypeLocaleName":"1X2","marketId":"406012","fixtureId":"32023","status":1,"statusLocaleName":"Open","line":null,"baseLine":null,"actualPrice":"2.2412","suspensionReason":null,"suspensionReasonLocaleName":null,"participantId":"740","participantLocaleName":"King Coconut","settlementType":null,"settlementTypeLocaleName":null,"isPriceHigher":null }]] }], 
}
const deleteMarketsSubscription = {
    ...addOrUpdateMarketsSubscription,
    "type":"deleteMarkets",
}
const updateLiveScoresSubscription = {
    ...addOrUpdateMarketsSubscription,
    "type":"updateLivescores",
}

test("test reduceEventSubscriptions function", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = initState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = initState[0].events[0].markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = initState[0].events[0].livescore

    let results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(initState, [addOrUpdateMarketsSubscription])

    results.forEach(row => {
        let found = false
        row.events.forEach(event => {
            event.markets?.forEach(m => {
                for (let i = 0; i < m.bets.length; i++) {
                    const bet = m.bets[i]
                    for (let j = 0; j < bet.length; j++) {
                        const b = bet[j]
                        if (b.id === "2218561") {
                            found = true
                        }
                    }
                }
            })
        })
        expect(found).toBe(true)
    })

    results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(results, [deleteMarketsSubscription])
    results.forEach(row => {
        row.events.forEach(event => {
            event.markets?.forEach(m => {
                for (let i = 0; i < m.bets.length; i++) {
                    const bet = m.bets[i]
                    for (let j = 0; j < bet.length; j++) {
                        const b = bet[j]
                        expect(b.id).not.toBe("2218561")
                    }
                }
            })
        })
    })

    results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(results, [updateLiveScoresSubscription])
    results.forEach(row => {
        row.events.forEach(event => {
            if (event.fixture.id === updateLiveScoresSubscription.fixtureId) {
                expect(event.livescore?.eventStatus).toBe(updateLiveScoresSubscription.livescore?.eventStatus)
            }
        })
    })


    results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(results, [subscriptionDeleteFixture])
    
    results.forEach(row => {
        row.events.forEach(event => {
            expect(event.fixture.id).not.toBe(subscriptionDeleteFixture.fixtureId)
        })
    })
    
})

test("test reduceEventSubscriptionsForSingleEvent - addOrUpdateMarkets", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    // 測試 addOrUpdateMarkets：應新增 market 到 event 中
    const result = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [addOrUpdateMarketsSubscription],
    )

    expect(result).not.toBeNull()
    let found = false
    result!.markets?.forEach(m => {
        for (let i = 0; i < m.bets.length; i++) {
            const bet = m.bets[i]
            for (let j = 0; j < bet.length; j++) {
                const b = bet[j]
                if (b!.id === "2218561") {
                    found = true
                }
            }
        }
    })
    expect(found).toBe(true)
})

test("test reduceEventSubscriptionsForSingleEvent - deleteMarkets", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    // 先新增 market，再刪除
    const afterAdd = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [addOrUpdateMarketsSubscription],
    )
    expect(afterAdd).not.toBeNull()

    const afterDelete = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        afterAdd!, [deleteMarketsSubscription],
    )
    expect(afterDelete).not.toBeNull()
    afterDelete!.markets?.forEach(m => {
        for (let i = 0; i < m.bets.length; i++) {
            const bet = m.bets[i]
            for (let j = 0; j < bet.length; j++) {
                const b = bet[j]
                expect(b!.id).not.toBe("2218561")
            }
        }
    })
})

test("test reduceEventSubscriptionsForSingleEvent - updateLivescores", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    const result = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [updateLiveScoresSubscription],
    )

    expect(result).not.toBeNull()
    expect(result!.livescore?.eventStatus).toBe(updateLiveScoresSubscription.livescore?.eventStatus)
})

test("test reduceEventSubscriptionsForSingleEvent - deleteEvents 回傳 null", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    const result = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [subscriptionDeleteFixture],
    )

    expect(result).toBeNull()
})

test("test reduceEventSubscriptionsForSingleEvent - fixtureId 不匹配時不更新", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    const mismatchedSubscription = {
        ...addOrUpdateMarketsSubscription,
        fixtureId: "99999",  // 不匹配的 fixtureId
    }

    const result = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [mismatchedSubscription],
    )

    // fixtureId 不匹配，應回傳原始參照
    expect(result).toBe(singleEvent)
})

test("test reduceEventSubscriptionsForSingleEvent - 沒有任何更新時回傳原始參照", () => {
    const singleEvent = initState[0].events[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = singleEvent.fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = singleEvent.markets![0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = singleEvent.livescore

    const result = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        singleEvent, [],
    )

    // 沒有 subscription，應回傳原始參照（referential equality）
    expect(result).toBe(singleEvent)
})

// ========== isPriceHigher 測試 ==========

// 建立一個用於 isPriceHigher 測試的輔助函式
function createIsPriceHigherTestData() {
    const testState = [
        {
            leagueLocaleName: "Test League",
            league: { id: "L1", weight: 1 },
            eventsCount: 1,
            eventsHotCount: 0,
            hasData: true,
            events: [
                {
                    fixture: {
                        id: "F1",
                        isHot: false,
                        startedAt: "2025-01-01T00:00:00Z",
                        leagueId: "L1",
                        leagueLocaleName: "Test League",
                        league: { id: "L1", weight: 1 },
                    },
                    markets: [
                        {
                            id: "M1",
                            marketType: 1,
                            bets: [
                                [
                                    {
                                        id: "B1",
                                        actualPrice: "1.50",
                                        isPriceHigher: null,
                                    },
                                ],
                                [
                                    {
                                        id: "B2",
                                        actualPrice: "2.00",
                                        isPriceHigher: null,
                                    },
                                ],
                                [
                                    {
                                        id: "B3",
                                        actualPrice: "3.00",
                                        isPriceHigher: null,
                                    },
                                ],
                            ],
                        },
                    ],
                    livescore: { id: "LS1" },
                },
            ],
            leagueId: "L1",
        },
    ]
    return testState
}

test("test isPriceHigher - 價格上漲時應標記為 true", () => {
    const testState = createIsPriceHigherTestData()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = testState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = testState[0].events[0].markets[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = testState[0].events[0].livescore

    // B1 價格從 1.50 上漲到 2.00
    const subscription = {
        type: "addOrUpdateMarkets",
        fixtureId: "F1",
        markets: [
            {
                id: "M1",
                marketType: 1,
                bets: [
                    [{ id: "B1", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B2", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B3", actualPrice: "3.00", isPriceHigher: null }],
                ],
            },
        ],
    }

    // 測試 reduceEventSubscriptions
    const results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(
        testState, [subscription],
    )
    const updatedBetB1 = results[0].events[0].markets![0].bets[0][0]
    expect(updatedBetB1!.isPriceHigher).toBe(true)

    // 測試 reduceEventSubscriptionsForSingleEvent
    const singleResult = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        testState[0].events[0], [subscription],
    )
    const singleUpdatedBetB1 = singleResult!.markets![0].bets[0][0]
    expect(singleUpdatedBetB1!.isPriceHigher).toBe(true)
})

test("test isPriceHigher - 價格下跌時應標記為 false", () => {
    const testState = createIsPriceHigherTestData()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = testState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = testState[0].events[0].markets[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = testState[0].events[0].livescore

    // B1 價格從 1.50 下跌到 1.20
    const subscription = {
        type: "addOrUpdateMarkets",
        fixtureId: "F1",
        markets: [
            {
                id: "M1",
                marketType: 1,
                bets: [
                    [{ id: "B1", actualPrice: "1.20", isPriceHigher: null }],
                    [{ id: "B2", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B3", actualPrice: "3.00", isPriceHigher: null }],
                ],
            },
        ],
    }

    // 測試 reduceEventSubscriptions
    const results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(
        testState, [subscription],
    )
    const updatedBetB1 = results[0].events[0].markets![0].bets[0][0]
    expect(updatedBetB1!.isPriceHigher).toBe(false)

    // 測試 reduceEventSubscriptionsForSingleEvent
    const singleResult = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        testState[0].events[0], [subscription],
    )
    const singleUpdatedBetB1 = singleResult!.markets![0].bets[0][0]
    expect(singleUpdatedBetB1!.isPriceHigher).toBe(false)
})

test("test isPriceHigher - 價格不變時應保持 null", () => {
    const testState = createIsPriceHigherTestData()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = testState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = testState[0].events[0].markets[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = testState[0].events[0].livescore

    // 所有價格都不變
    const subscription = {
        type: "addOrUpdateMarkets",
        fixtureId: "F1",
        markets: [
            {
                id: "M1",
                marketType: 1,
                bets: [
                    [{ id: "B1", actualPrice: "1.50", isPriceHigher: null }],
                    [{ id: "B2", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B3", actualPrice: "3.00", isPriceHigher: null }],
                ],
            },
        ],
    }

    // 測試 reduceEventSubscriptions
    const results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(
        testState, [subscription],
    )
    results[0].events[0].markets![0].bets.forEach(row => {
        row.forEach(bet => {
            expect(bet!.isPriceHigher).toBeNull()
        })
    })

    // 測試 reduceEventSubscriptionsForSingleEvent
    const singleResult = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        testState[0].events[0], [subscription],
    )
    singleResult!.markets![0].bets.forEach(row => {
        row.forEach(bet => {
            expect(bet!.isPriceHigher).toBeNull()
        })
    })
})

test("test isPriceHigher - 混合情境：同一 market 中有上漲、下跌、不變的 bet", () => {
    const testState = createIsPriceHigherTestData()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = testState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = testState[0].events[0].markets[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = testState[0].events[0].livescore

    // B1: 1.50 -> 2.00 (上漲), B2: 2.00 -> 1.50 (下跌), B3: 3.00 -> 3.00 (不變)
    const subscription = {
        type: "addOrUpdateMarkets",
        fixtureId: "F1",
        markets: [
            {
                id: "M1",
                marketType: 1,
                bets: [
                    [{ id: "B1", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B2", actualPrice: "1.50", isPriceHigher: null }],
                    [{ id: "B3", actualPrice: "3.00", isPriceHigher: null }],
                ],
            },
        ],
    }

    // 測試 reduceEventSubscriptions
    const results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(
        testState, [subscription],
    )
    const marketResult = results[0].events[0].markets![0]
    expect(marketResult.bets[0][0]!.isPriceHigher).toBe(true)   // B1 上漲
    expect(marketResult.bets[1][0]!.isPriceHigher).toBe(false)  // B2 下跌
    expect(marketResult.bets[2][0]!.isPriceHigher).toBeNull()    // B3 不變

    // 測試 reduceEventSubscriptionsForSingleEvent
    const singleResult = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        testState[0].events[0], [subscription],
    )
    const singleMarketResult = singleResult!.markets![0]
    expect(singleMarketResult.bets[0][0]!.isPriceHigher).toBe(true)   // B1 上漲
    expect(singleMarketResult.bets[1][0]!.isPriceHigher).toBe(false)  // B2 下跌
    expect(singleMarketResult.bets[2][0]!.isPriceHigher).toBeNull()    // B3 不變
})

test("test isPriceHigher - 新增的 bet（沒有前一版本）應保持 null", () => {
    const testState = createIsPriceHigherTestData()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fixture = testState[0].events[0].fixture
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const market = testState[0].events[0].markets[0]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const livescore = testState[0].events[0].livescore

    // 新增一個之前不存在的 B99
    const subscription = {
        type: "addOrUpdateMarkets",
        fixtureId: "F1",
        markets: [
            {
                id: "M1",
                marketType: 1,
                bets: [
                    [{ id: "B1", actualPrice: "1.50", isPriceHigher: null }],
                    [{ id: "B2", actualPrice: "2.00", isPriceHigher: null }],
                    [{ id: "B3", actualPrice: "3.00", isPriceHigher: null }],
                    [{ id: "B99", actualPrice: "5.00", isPriceHigher: null }],
                ],
            },
        ],
    }

    // 測試 reduceEventSubscriptions
    const results = reduceEventSubscriptions<typeof fixture, typeof market, typeof livescore>(
        testState, [subscription],
    )
    const marketResult = results[0].events[0].markets![0]
    // B99 是新增的 bet，沒有前一版本，isPriceHigher 應保持 null
    const newBet = marketResult.bets[3][0]
    expect(newBet!.id).toBe("B99")
    expect(newBet!.isPriceHigher).toBeNull()

    // 測試 reduceEventSubscriptionsForSingleEvent
    const singleResult = reduceEventSubscriptionsForSingleEvent<typeof fixture, typeof market, typeof livescore>(
        testState[0].events[0], [subscription],
    )
    const singleNewBet = singleResult!.markets![0].bets[3][0]
    expect(singleNewBet!.id).toBe("B99")
    expect(singleNewBet!.isPriceHigher).toBeNull()
})
