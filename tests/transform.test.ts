import { transformBetName, transformHomeAwayLocaleName, transformMarket } from "../src/transform"
import { IBet, IFixture, IMarket } from "../src/types"

describe("transformHomeAwayLocaleName", () => {
    const fixture: IFixture = {
        id: "fixture-1",
        isHot: true,
        leagueLocaleName: "英格蘭超級聯賽",
        league: {
            id: "league-1",
            weight: 100,
        },
        participants: [
            { id: "p1", localeName: "兵工廠", position: 1 },
            { id: "p2", localeName: "切爾西", position: 2 },
        ],
    }

    test("替換 {Home Team} 和 {Away Team}（不分大小寫）", () => {
        expect(transformHomeAwayLocaleName("{Home Team} to Score", fixture)).toBe("兵工廠 to Score")
        expect(transformHomeAwayLocaleName("{Away Team} to Score", fixture)).toBe("切爾西 to Score")
        expect(transformHomeAwayLocaleName("{home team} total", fixture)).toBe("兵工廠 total")
        expect(transformHomeAwayLocaleName("{AWAY TEAM} TOTAL", fixture)).toBe("切爾西 TOTAL")
    })

    test("替換單獨的 {Home} 和 {Away}（不分大小寫）", () => {
        expect(transformHomeAwayLocaleName("{Home} to Win", fixture)).toBe("兵工廠 to Win")
        expect(transformHomeAwayLocaleName("{Away} to Win", fixture)).toBe("切爾西 to Win")
        expect(transformHomeAwayLocaleName("{home}", fixture)).toBe("兵工廠")
        expect(transformHomeAwayLocaleName("{AWAY}", fixture)).toBe("切爾西")
        expect(transformHomeAwayLocaleName("{Home} / {Away}", fixture)).toBe("兵工廠 / 切爾西")
    })

    test("同時包含 {Home Team} 和 {Away Team}", () => {
        expect(transformHomeAwayLocaleName("{Home Team} vs {Away Team}", fixture)).toBe("兵工廠 vs 切爾西")
    })

    test("未被 {} 包裹的字串不應被替換，避免誤判", () => {
        expect(transformHomeAwayLocaleName("Home Team to Score", fixture)).toBe("Home Team to Score")
        expect(transformHomeAwayLocaleName("Away to Win", fixture)).toBe("Away to Win")
        expect(transformHomeAwayLocaleName("Takeaway Market", fixture)).toBe("Takeaway Market")
        expect(transformHomeAwayLocaleName("Homestead League", fixture)).toBe("Homestead League")
    })

    test("找不到對應 participant 時保留原本文字", () => {
        const fixtureWithoutAway: IFixture = {
            ...fixture,
            participants: [
                { id: "p1", localeName: "兵工廠", position: 1 },
            ],
        }
        expect(transformHomeAwayLocaleName("{Away Team} to Score", fixtureWithoutAway)).toBe("{Away Team} to Score")
        expect(transformHomeAwayLocaleName("{Away} to Win", fixtureWithoutAway)).toBe("{Away} to Win")
    })

    test("邊界條件處理：空字串或缺少 fixture/participants", () => {
        expect(transformHomeAwayLocaleName("", fixture)).toBe("")
        // @ts-expect-error 測試傳入 undefined fixture
        expect(transformHomeAwayLocaleName("Home Team", undefined)).toBe("Home Team")
    })
})

describe("transformBetName", () => {
    const fixture: IFixture = {
        id: "fixture-1",
        isHot: true,
        leagueLocaleName: "英超",
        league: { id: "l1", weight: 1 },
        participants: [
            { id: "p1", localeName: "兵工廠", position: 1 },
            { id: "p2", localeName: "切爾西", position: 2 },
        ],
    }

    const baseBet: IBet = {
        id: "b1",
        localeName: "",
        viewType: 1,
        actualPrice: "1.95",
        canBet: true,
        isFromInplay: false,
    }

    test("缺少 fixture 時回傳原始 localeName", () => {
        const bet: IBet = { ...baseBet, localeName: "{Home} 勝" }
        expect(transformBetName(bet)).toBe("{Home} 勝")
    })

    test("viewType 1: 替換 1 / 2 以及帶有 {} 的 localeName", () => {
        expect(transformBetName({ ...baseBet, viewType: 1, localeName: "1" }, fixture)).toBe("兵工廠")
        expect(transformBetName({ ...baseBet, viewType: 1, localeName: "2" }, fixture)).toBe("切爾西")
        expect(transformBetName({ ...baseBet, viewType: 1, localeName: "{home team}" }, fixture)).toBe("兵工廠")
        expect(transformBetName({ ...baseBet, viewType: 1, localeName: "{away}" }, fixture)).toBe("切爾西")
    })

    test("viewType 2: 替換含有 {} 的 localeName", () => {
        expect(transformBetName({ ...baseBet, viewType: 2, localeName: "{Home} 獨贏" }, fixture)).toBe("兵工廠 獨贏")
        expect(transformBetName({ ...baseBet, viewType: 2, localeName: "Home 獨贏" }, fixture)).toBe("Home 獨贏")
    })

    test("viewType 3: 包含 line 且替換隊伍或 {} 關鍵字", () => {
        expect(transformBetName({ ...baseBet, viewType: 3, localeName: "1", line: "-0.5" }, fixture)).toBe("兵工廠 (-0.5)")
        expect(transformBetName({ ...baseBet, viewType: 3, localeName: "{away team}", line: "+0.5" }, fixture)).toBe("切爾西 (+0.5)")
    })

    test("viewType 4: 替換 localeName 中的 {} 關鍵字", () => {
        expect(transformBetName({ ...baseBet, viewType: 4, localeName: "{home} 大小", line: "2.5" }, fixture)).toBe("兵工廠 大小 (2.5)")
        expect(transformBetName({ ...baseBet, viewType: 4, localeName: "home 大小", line: "2.5" }, fixture)).toBe("home 大小 (2.5)")
    })

    test("viewType 5: 替換 playerLocaleName 與 localeName 中的 {} 關鍵字", () => {
        expect(transformBetName({
            ...baseBet,
            viewType: 5,
            playerLocaleName: "{home team} 薩卡",
            localeName: "進球數",
            line: ">=1",
        }, fixture)).toBe("兵工廠 薩卡 進球數 >=1")
    })

    test("viewType 6: 組合盤名稱與 subName 中的 {} 關鍵字替換", () => {
        expect(transformBetName({
            ...baseBet,
            viewType: 6,
            localeName: "1 & 大",
            line: "2.5",
        }, fixture)).toBe("兵工廠 大 2.5")

        expect(transformBetName({
            ...baseBet,
            viewType: 6,
            localeName: "{home} & 小",
            line: "1.5",
        }, fixture)).toBe("兵工廠 小 1.5")
    })
})

describe("transformMarket", () => {
    const fixture: IFixture = {
        id: "fixture-1",
        isHot: true,
        leagueLocaleName: "英超",
        league: { id: "l1", weight: 1 },
        participants: [
            { id: "p1", localeName: "兵工廠", position: 1 },
            { id: "p2", localeName: "切爾西", position: 2 },
        ],
    }

    test("轉換 marketTypeLocaleName 中的 {} 關鍵字，未帶 {} 則不替換", () => {
        const markets: IMarket[] = [
            {
                id: "m1",
                viewType: 1,
                marketType: 1,
                marketTypeLocaleName: "{home team} 總進球數",
                bets: [],
            },
            {
                id: "m2",
                viewType: 1,
                marketType: 2,
                marketTypeLocaleName: "Home Team to Win",
                bets: [],
            },
        ]

        const result = transformMarket(markets, fixture)
        expect(result[0].marketTypeLocaleName).toBe("兵工廠 總進球數")
        expect(result[1].marketTypeLocaleName).toBe("Home Team to Win")
    })

    test("轉換 betsBlocks 內 BetItem 的 name 與 subName 中的 {} 關鍵字", () => {
        const bet1: IBet = {
            id: "b1",
            localeName: "{home team}",
            viewType: 2,
            actualPrice: "1.5",
            canBet: true,
            isFromInplay: false,
        }
        const bet2: IBet = {
            id: "b2",
            localeName: "{away team}",
            viewType: 2,
            actualPrice: "2.5",
            canBet: true,
            isFromInplay: false,
        }
        const betCombo: IBet = {
            id: "b3",
            localeName: "{home} & 大",
            viewType: 6,
            line: "2.5",
            actualPrice: "3.0",
            canBet: true,
            isFromInplay: false,
        }

        const markets: IMarket[] = [
            {
                id: "m1",
                viewType: 2,
                marketType: 1,
                marketTypeLocaleName: "獨贏",
                bets: [[bet1, bet2]],
            },
            {
                id: "m2",
                viewType: 6,
                marketType: 6,
                marketTypeLocaleName: "勝平負 & 總進球",
                bets: [[betCombo]],
            },
        ]

        const result = transformMarket(markets, fixture)

        // viewType 2
        const view2Items = result[0].betsBlocks[0].items
        expect(view2Items[0][0]?.name).toBe("兵工廠")
        expect(view2Items[1][0]?.name).toBe("切爾西")

        // viewType 6
        const view6Items = result[1].betsBlocks[0].items
        expect(view6Items[0][0]?.name).toBe("大 2.5")
        expect(view6Items[0][0]?.subName).toBe("兵工廠")
    })

    test("轉換 betsBlocks 的 columnNames 與 centerTopic 中的 {} 關鍵字", () => {
        const bet: IBet = {
            id: "b1",
            localeName: "進球數",
            playerLocaleName: "{home} 前鋒",
            viewType: 5,
            line: "1.5",
            actualPrice: "1.8",
            canBet: true,
            isFromInplay: false,
        }

        const marketView5: IMarket = {
            id: "m5",
            viewType: 5,
            marketType: 5,
            marketTypeLocaleName: "球員盤",
            bets: [[bet]],
        }

        const marketView3: IMarket = {
            id: "m3",
            viewType: 3,
            marketType: 3,
            marketTypeLocaleName: "讓球",
            betOptionLocaleNames: ["{home team}", "{away team}"],
            bets: [[{ ...bet, viewType: 3, line: "-0.5" }]],
        }

        const result = transformMarket([marketView5, marketView3], fixture)

        // viewType 5 centerTopic
        expect(result[0].betsBlocks[0].centerTopic).toBe("兵工廠 前鋒")

        // viewType 3 columnNames
        expect(result[1].betsBlocks[0].columnNames).toEqual(["兵工廠", "切爾西"])
    })
})
