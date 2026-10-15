import { transformMarketTypeLocaleName } from "../src/transform"
import { IFixture } from "../src/types"

describe("transformMarketTypeLocaleName", () => {
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

    test("替換 Home Team 和 Away Team（不分大小寫）", () => {
        expect(transformMarketTypeLocaleName("Home Team to Score", fixture)).toBe("兵工廠 to Score")
        expect(transformMarketTypeLocaleName("Away Team to Score", fixture)).toBe("切爾西 to Score")
        expect(transformMarketTypeLocaleName("home team total", fixture)).toBe("兵工廠 total")
        expect(transformMarketTypeLocaleName("AWAY TEAM TOTAL", fixture)).toBe("切爾西 TOTAL")
    })

    test("替換單獨的 Home 和 Away（不分大小寫）", () => {
        expect(transformMarketTypeLocaleName("Home to Win", fixture)).toBe("兵工廠 to Win")
        expect(transformMarketTypeLocaleName("Away to Win", fixture)).toBe("切爾西 to Win")
        expect(transformMarketTypeLocaleName("home", fixture)).toBe("兵工廠")
        expect(transformMarketTypeLocaleName("AWAY", fixture)).toBe("切爾西")
        expect(transformMarketTypeLocaleName("Home / Away", fixture)).toBe("兵工廠 / 切爾西")
    })

    test("同時包含 Home Team 和 Away Team", () => {
        expect(transformMarketTypeLocaleName("Home Team vs Away Team", fixture)).toBe("兵工廠 vs 切爾西")
    })

    test("確保單詞邊界不會誤替換包含關鍵字的單詞", () => {
        expect(transformMarketTypeLocaleName("Takeaway Market", fixture)).toBe("Takeaway Market")
        expect(transformMarketTypeLocaleName("Homestead League", fixture)).toBe("Homestead League")
    })

    test("找不到對應 participant 時保留原本文字", () => {
        const fixtureWithoutAway: IFixture = {
            ...fixture,
            participants: [
                { id: "p1", localeName: "兵工廠", position: 1 },
            ],
        }
        expect(transformMarketTypeLocaleName("Away Team to Score", fixtureWithoutAway)).toBe("Away Team to Score")
        expect(transformMarketTypeLocaleName("Away to Win", fixtureWithoutAway)).toBe("Away to Win")
    })

    test("邊界條件處理：空字串或缺少 fixture/participants", () => {
        expect(transformMarketTypeLocaleName("", fixture)).toBe("")
        // @ts-expect-error 測試傳入 undefined fixture
        expect(transformMarketTypeLocaleName("Home Team", undefined)).toBe("Home Team")
    })
})
