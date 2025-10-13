import Decimal from "decimal.js"
import { calculateTotalStakeAndMaxPayout, CombinationBetOption, CreateOrderParams, getCombinationBetReferenceTable } from "../src/combination-bet"

describe("calculateTotalStakeAndMaxPayout", () => {

    // 為了測試複式串關，我們需要一個有效的 combinationBetOptionId
    // 從 combination-bet-reference-table.test.ts 中，我們知道 foldSize=3 的 "Doubles" (2/3) 的 ID 是 "4"
    // 它的 combinationCount 是 3
    const systemBetOption = (() => {
        const table = getCombinationBetReferenceTable(3)
        const opt = table.options.find(o => o.combinationCount === 3) // System 2/3 (Doubles)
        expect(opt?.id).toBe("4")
        expect(opt?.fallbackName()).toBe("System 2/3")
        expect(opt?.parameters.length).toBe(1)
        expect(opt?.parameters[0].foldSize).toBe(3)
        expect(opt?.parameters[0].combSelectNum).toBe(2)
        return opt!
    })()

    interface TestCase {
            description: string
            perStakeAmount: string
            odds: string[]
            combinationBetOptionId?: string
            combinationBetOption?: CombinationBetOption
            equivalentOdds?: string
            // 必填
            maxBetOdds: string
            expectedTotalStake: string
            expectedMaxPayout: string
            expectedTotalOdds: Decimal
            expectedOverMaxOdds: boolean        
    }

    const testCases: TestCase[] = [
        {
            description: "Single bet",
            perStakeAmount: "10",
            odds: ["2.0"],
            maxBetOdds: "10",
            expectedTotalStake: "10",
            expectedMaxPayout: "20",
            expectedTotalOdds: new Decimal("2.0"),
            expectedOverMaxOdds: false,
        },
        {
            description: "Single bet",
            perStakeAmount: "10",
            odds: ["2.0"],
            maxBetOdds: "1.8",
            expectedTotalStake: "10",
            expectedMaxPayout: "20",
            expectedTotalOdds: new Decimal("2.0"),
            expectedOverMaxOdds: true,
        },
        {
            description: "Single bet",
            perStakeAmount: "10",
            odds: ["150.0"],
            maxBetOdds: "100",
            expectedTotalStake: "10",
            expectedMaxPayout: "1500", // 10 * 150
            expectedTotalOdds: new Decimal("150.0"),
            expectedOverMaxOdds: true,
        },
        {
            description: "Parlay bet",
            perStakeAmount: "10",
            odds: ["2.0", "3.0"],
            maxBetOdds: "7",
            expectedTotalStake: "10",
            expectedMaxPayout: "60", // 10 * (2.0 * 3.0)
            expectedTotalOdds: new Decimal("6.0"),
            expectedOverMaxOdds: false,
        },
        {
            description: "Parlay bet",
            perStakeAmount: "10",
            odds: ["2.0", "3.0"],
            maxBetOdds: "5",
            expectedTotalStake: "10",
            expectedMaxPayout: "60",
            expectedTotalOdds: new Decimal("6.0"),
            expectedOverMaxOdds: true,
        },
        {
            description: "Parlay bet",
            perStakeAmount: "10",
            odds: ["10.0", "15.0"], // Product = 150
            maxBetOdds: "100",
            expectedTotalStake: "10",
            expectedMaxPayout: "1500", // 10 * 150
            expectedTotalOdds: new Decimal("150.0"),
            expectedOverMaxOdds: true,
        },
        {
            description: "System bet (2/3)",
            perStakeAmount: "10",
            odds: ["2.0", "3.0", "4.0"],
            combinationBetOptionId: systemBetOption.id, // System 2/3
            combinationBetOption: systemBetOption,
            maxBetOdds: "12",
            expectedTotalStake: "30", // 10 * 3 combinations
            expectedMaxPayout: "260", // 10 * ((2*3) + (2*4) + (3*4)) = 10 * (6 + 8 + 12) = 10 * 26
            expectedTotalOdds: new Decimal(260).div(new Decimal(30)), // 260 / 30
            expectedOverMaxOdds: false,
        },
        {
            description: "System bet (2/3)",
            perStakeAmount: "10",
            odds: ["2.0", "3.0", "4.0"],
            combinationBetOptionId: systemBetOption.id, // System 2/3
            combinationBetOption: systemBetOption,
            maxBetOdds: "11.9",
            expectedTotalStake: "30",
            expectedMaxPayout: "260",
            expectedTotalOdds: new Decimal(260).div(new Decimal(30)),
            expectedOverMaxOdds: true,
        },
    ]

    for (const testCase of testCases) {
        it(`should correctly calculate for ${testCase.description} - [${testCase.combinationBetOptionId}] ${testCase.odds} (MAX: ${testCase.maxBetOdds})`, () => {
            const oddsDecimals = testCase.odds.map(o => new Decimal(o))

            let combinationBetOption: CombinationBetOption | undefined = testCase.combinationBetOption
            if (!combinationBetOption && testCase.combinationBetOptionId) {
                const foldSize = oddsDecimals.length
                const table = getCombinationBetReferenceTable(foldSize)
                combinationBetOption = table.options.find(opt => opt.id === testCase.combinationBetOptionId)
                if (!combinationBetOption) {
                    throw new Error(`CombinationBetOption with id ${testCase.combinationBetOptionId} not found for foldSize ${foldSize}`)
                }
            }

            const inputs: CreateOrderParams[] = [{
                perStakeAmount: testCase.perStakeAmount,
                odds: testCase.odds,
                combinationBetOptionId: testCase.combinationBetOptionId,
            }]

            const result = calculateTotalStakeAndMaxPayout(inputs, testCase.maxBetOdds)

            expect(result.totalStake.toString()).toBe(testCase.expectedTotalStake)
            expect(result.maxPayout.toString()).toBe(testCase.expectedMaxPayout)
            expect(result.equivalentOdds.eq(testCase.expectedTotalOdds)).toBe(true)
            expect(result.isOverMaxOdds).toBe(testCase.expectedOverMaxOdds)
        })   
    }
})