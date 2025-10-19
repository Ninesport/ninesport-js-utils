import { getCombinationBetReferenceTable } from "../src/combination-bet"
import Decimal from "decimal.js"
import { calculateCombinationBetDetail, CombinationBetItem, Pagination } from "../src/combination-bet-detail"

describe("combinationBetDetail", () => {
    interface TestCase {
            description: string
            payoutPrices: string[]
            foldSize: number
            combinationCount: number
            page: number
            pageSize: number
            expectPagination: Pagination
            expectItems: CombinationBetItem[]
    }
    const testCases: TestCase[] = [
        {
            description: "System 2/4 with pagination (page 1)",
            payoutPrices: ["1.5", "2.0", "2.5", "3.0"],
            foldSize: 4,
            combinationCount: 6, // C(4, 2)
            page: 1,
            pageSize: 4,
            expectPagination: {
                page: 1,
                total: 6,
                pageSize: 4,
                pages: 2,
                hasNext: true,
                hasPrev: false,
            },
            expectItems: [
                { betIndices: [1, 2], settledOdds: new Decimal("3") },    // 1.5 * 2.0
                { betIndices: [1, 3], settledOdds: new Decimal("3.75") }, // 1.5 * 2.5
                { betIndices: [1, 4], settledOdds: new Decimal("4.5") },  // 1.5 * 3.0
                { betIndices: [2, 3], settledOdds: new Decimal("5") },    // 2.0 * 2.5
            ],
        },
        {
            description: "System 2/4 with pagination (page 2)",
            payoutPrices: ["1.5", "2.0", "2.5", "3.0"],
            foldSize: 4,
            combinationCount: 6, // C(4, 2)
            page: 2,
            pageSize: 4,
            expectPagination: {
                page: 2,
                total: 6,
                pageSize: 4,
                pages: 2,
                hasNext: false,
                hasPrev: true,
            },
            expectItems: [
                { betIndices: [2, 4], settledOdds: new Decimal("6") },    // 2.0 * 3.0
                { betIndices: [3, 4], settledOdds: new Decimal("7.5") },  // 2.5 * 3.0
            ],
        },
        {
            description: "System 3/4 without pagination",
            payoutPrices: ["1.5", "2.0", "2.5", "3.0"],
            foldSize: 4,
            combinationCount: 4, // C(4, 3)
            page: 1,
            pageSize: 10,
            expectPagination: {
                page: 1,
                total: 4,
                pageSize: 10,
                pages: 1,
                hasNext: false,
                hasPrev: false,
            },
            expectItems: [
                { betIndices: [1, 2, 3], settledOdds: new Decimal("7.5") },   // 1.5 * 2.0 * 2.5
                { betIndices: [1, 2, 4], settledOdds: new Decimal("9") },     // 1.5 * 2.0 * 3.0
                { betIndices: [1, 3, 4], settledOdds: new Decimal("11.25") }, // 1.5 * 2.5 * 3.0
                { betIndices: [2, 3, 4], settledOdds: new Decimal("15") },    // 2.0 * 2.5 * 3.0
            ],
        },
        {
            description: "System 4/4 (Parlay)",
            payoutPrices: ["1.5", "2.0", "2.5", "3.0"],
            foldSize: 4,
            combinationCount: 1, // C(4, 4)
            page: 1,
            pageSize: 10,
            expectPagination: {
                page: 1,
                total: 1,
                pageSize: 10,
                pages: 1,
                hasNext: false,
                hasPrev: false,
            },
            expectItems: [
                { betIndices: [1, 2, 3, 4], settledOdds: new Decimal("22.5") }, // 1.5 * 2.0 * 2.5 * 3.0
            ],
        },
    ]

    testCases.forEach((testCase) => {
        it(testCase.description, () => {
            const table = getCombinationBetReferenceTable(testCase.foldSize)
            const combinationBetOption = table.options.find(opt => opt.combinationCount === testCase.combinationCount)
            if (!combinationBetOption) {
                throw new Error(`CombinationBetOption with combinationCount ${testCase.combinationCount} not found for foldSize ${testCase.foldSize}`)
            }
            const result = calculateCombinationBetDetail({
                combinationBetOptionId: combinationBetOption.id,
                payoutPrices: testCase.payoutPrices,
                page: testCase.page,
                pageSize: testCase.pageSize,
            })

            expect(result.pagination).toEqual(testCase.expectPagination)
            expect(result.items.map(item => ({
                betIndices: item.betIndices,
                settledOdds: item.settledOdds.toString(),
            }))).toEqual(testCase.expectItems.map(item => ({
                betIndices: item.betIndices,
                settledOdds: item.settledOdds.toString(),
            })))
            expect(result.combinationCount).toBe(testCase.combinationCount)
            expect(result.foldSize).toBe(testCase.foldSize)
        })
    })
})