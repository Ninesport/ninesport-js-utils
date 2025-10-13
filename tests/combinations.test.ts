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

