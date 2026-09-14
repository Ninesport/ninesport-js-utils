import Decimal from "decimal.js"
import { combinations, calculateEquivalentOddsWithoutDiv } from "../src/combinations"

/**
 * Test cases are adapted from the Go test function `TestCalculateEquivalentOdds`.
 * Note: The original Go test was for `CalculateEquivalentOdds` which includes division.
 * The expected values here (`expectOddsWithoutDiv`) are adjusted to test
 * `calculateEquivalentOddsWithoutDiv` by representing the sum of products before division.
 */
describe("Math utility functions", () => {

    interface TestCase {
        testName: string;
        odds: Decimal[];
        combSelectNum: number;
        maxBetOdds: Decimal;
        expectOddsWithoutDiv: Decimal;
        expectCombinationCount: number;
        expectOverMaxOdds: boolean;
    }

    const testData: TestCase[] = [
        {
            testName: "Single (C 1 of 1)",
            odds: [
                new Decimal(2.222),
            ],
            combSelectNum: 1,
            maxBetOdds: new Decimal(100),
            // 2.222 * 1
            expectOddsWithoutDiv: new Decimal(2.222),
            expectCombinationCount: 1,
            expectOverMaxOdds: false,
        },
        {
            testName: "C 3 of 2",
            odds: [
                new Decimal(2.0),
                new Decimal(3.0),
                new Decimal(4.0),
            ],
            maxBetOdds: new Decimal(13),
            combSelectNum: 2,
            // (2*3) + (2*4) + (3*4) = 6 + 8 + 12 = 26
            expectOddsWithoutDiv: new Decimal(26.0),
            expectCombinationCount: 3,
            expectOverMaxOdds: false,
        },
        {
            testName: "C 4 of 3",
            odds: [
                new Decimal(1.5),
                new Decimal(2.0),
                new Decimal(2.5),
                new Decimal(3.0),
            ],
            maxBetOdds: new Decimal(13),
            combSelectNum: 3,
            // (1.5*2*2.5) + (1.5*2*3) + (1.5*2.5*3) + (2*2.5*3) = 7.5 + 9 + 11.25 + 15 = 42.75
            expectOddsWithoutDiv: new Decimal(42.75),
            expectCombinationCount: 4,
            expectOverMaxOdds: true,
        },
        {
            testName: "C 5 of 1",
            odds: [
                new Decimal(1.5),
                new Decimal(2.0),
                new Decimal(2.5),
                new Decimal(3.0),
                new Decimal(3.5),
            ],
            maxBetOdds: new Decimal(4),
            combSelectNum: 1,
            // 1.5 + 2.0 + 2.5 + 3.0 + 3.5 = 12.5
            expectOddsWithoutDiv: new Decimal(12.5),
            expectCombinationCount: 5,
            expectOverMaxOdds: false,
        },
        {
            testName: "C 5 of 5",
            odds: [
                new Decimal(1.1),
                new Decimal(1.2),
                new Decimal(1.3),
                new Decimal(1.4),
                new Decimal(1.5),
            ],
            maxBetOdds: new Decimal(3.5),
            combSelectNum: 5,
            // 1.1 * 1.2 * 1.3 * 1.4 * 1.5 = 3.6036
            expectOddsWithoutDiv: new Decimal(3.6036),
            expectCombinationCount: 1,
            expectOverMaxOdds: true,
        },
    ]

    testData.forEach(({ testName, odds, combSelectNum, maxBetOdds, expectCombinationCount, expectOddsWithoutDiv, expectOverMaxOdds }) => {
        it(`should correctly calculate for ${testName}`, () => {
            const combinationCount = combinations(odds.length, combSelectNum)
            expect(combinationCount).toBe(expectCombinationCount)

            const [actualOddsSum, isOverMaxOdds] = calculateEquivalentOddsWithoutDiv(odds, maxBetOdds, combSelectNum)
            // Compare string representations for precise matching and better error messages.
            expect(actualOddsSum.toString()).toBe(expectOddsWithoutDiv.toString())
            expect(isOverMaxOdds).toBe(expectOverMaxOdds)
        })
    })
})

describe("calculateEquivalentOddsWithoutDiv 效能測試 (Benchmark)", () => {
    // 預先產生基準賠率資料（長度 20）
    const baseOdds = Array.from({ length: 20 }, () => new Decimal(1.5))
    const maxBetOdds = new Decimal(10000000)

    for (let n = 15; n <= 20; n++) {
        // k 選擇 worst 的情況，也就是 odds.length / 2 (取整數 Math.floor(n / 2))
        const kWorst = Math.floor(n / 2)
        const totalCombinations = combinations(n, kWorst)

        it(`odds 長度 = ${n}, k = ${kWorst} (最差情況，組合數: ${totalCombinations})`, () => {
            const odds = baseOdds.slice(0, n)
            const iterations = 10
            const durations: number[] = []

            let lastResult: [Decimal, boolean] | null = null
            for (let i = 0; i < iterations; i++) {
                const startTime = performance.now()
                lastResult = calculateEquivalentOddsWithoutDiv(odds, maxBetOdds, kWorst)
                const endTime = performance.now()
                durations.push(endTime - startTime)
            }

            const avgDuration = durations.reduce((acc, cur) => acc + cur, 0) / iterations
            const minDuration = Math.min(...durations)

            console.log(
                `[Benchmark] odds 長度: ${n}, k: ${kWorst}, 組合數: ${totalCombinations}, 平均耗時: ${avgDuration.toFixed(2)} ms (最佳: ${minDuration.toFixed(2)} ms, 執行 ${iterations} 次)`,
            )

            expect(lastResult).not.toBeNull()
            if (lastResult) {
                const [result, isOver] = lastResult
                expect(result).toBeInstanceOf(Decimal)
                expect(result.gt(0)).toBe(true)
                expect(typeof isOver).toBe("boolean")
            }
        })
    }
})


