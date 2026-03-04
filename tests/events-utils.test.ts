import { reduceEventSubscriptions } from "../src/events-utils"

const initState = [
    {
        "leagueLocaleName": "Great Britain. General Election. Rhondda and Ogmore constituency. Winner",
        "eventsCount": 1,
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
