import Decimal from "decimal.js"
import { calculateEquivalentOddsFromBetOption, calculateTotalStakeAndMaxPayout, CombinationBetOption, getCombinationBetReferenceTable } from "../src/combination-bet"

describe("calculateTotalStakeAndMaxPayout", () => {
    
    it("should correctly calculate for a single bet", () => {
        const inputs = [
            {
                perStakeAmount: "100",
                odds: ["1.5"],
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        expect(result.totalStake.toString()).toBe("100")
        expect(result.maxPayout.toString()).toBe("150") // 100 * 1.5
        expect(result.totalOdds.toString()).toBe("1.5")
    })

    it("should correctly calculate for multiple single bets", () => {
        const inputs = [
            {
                perStakeAmount: "10",
                odds: ["2.5"],
                equivalentOdds: "2.5",
            },
            {
                perStakeAmount: "20",
                odds: ["3.0"],
                equivalentOdds: "3.0",
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        expect(result.totalStake.toString()).toBe("30") // 10 + 20
        expect(result.maxPayout.toString()).toBe("85") // (10 * 2.5) + (20 * 3.0) = 25 + 60
        expect(result.totalOdds.toFixed(4)).toBe(new Decimal(85).div(30).toFixed(4)) // 85 / 30

        inputs.forEach(input => {
            expect(calculateEquivalentOddsFromBetOption(input.odds, undefined).toFixed(1)).toBe(input.equivalentOdds)
        })
    })

    it("should correctly calculate for a parlay bet", () => {
        const inputs = [
            {
                perStakeAmount: "50",
                odds: ["1.5", "2.0", "1.2"],
                equivalentOdds: "3.6",
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        expect(result.totalStake.toString()).toBe("50")
        expect(result.maxPayout.toString()).toBe("180") // 50 * (1.5 * 2.0 * 1.2) = 50 * 3.6
        expect(result.totalOdds.toString()).toBe("3.6")

        inputs.forEach(input => {
            expect(calculateEquivalentOddsFromBetOption(input.odds, undefined).toFixed(1)).toBe(input.equivalentOdds)
        })
    })

    it("should correctly calculate for multiple parlay bets", () => {
        const inputs = [
            {
                perStakeAmount: "10",
                odds: ["1.5", "2.0"], // Payout: 10 * 3 = 30
                equivalentOdds: "3.0",
            },
            {
                perStakeAmount: "5",
                odds: ["2.0", "3.0", "4.0"], // Payout: 5 * 24 = 120
                equivalentOdds: "24.0",
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        expect(result.totalStake.toString()).toBe("15") // 10 + 5
        expect(result.maxPayout.toString()).toBe("150") // 30 + 120
        expect(result.totalOdds.toString()).toBe("10") // 150 / 15

        inputs.forEach(input => {
            expect(calculateEquivalentOddsFromBetOption(input.odds, undefined).toFixed(1)).toBe(input.equivalentOdds)
        })
    })

    it("should correctly calculate for a mix of single and parlay bets", () => {
        const inputs = [
            {
                perStakeAmount: "100",
                odds: ["1.8"], // Single, Payout: 180
                equivalentOdds: "1.8",
            },
            {
                perStakeAmount: "20",
                odds: ["2.0", "2.5"], // Parlay, Payout: 20 * 5 = 100
                equivalentOdds: "5.0",
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        expect(result.totalStake.toString()).toBe("120") // 100 + 20
        expect(result.maxPayout.toString()).toBe("280") // 180 + 100
        expect(result.totalOdds.toFixed(4)).toBe(new Decimal(280).div(120).toFixed(4)) // 280 / 120

        inputs.forEach(input => {
            expect(calculateEquivalentOddsFromBetOption(input.odds, undefined).toFixed(1)).toBe(input.equivalentOdds)
        })
    })


    // 為了測試複式串關，我們需要一個有效的 combinationBetOptionId
    // 從 combination-bet-reference-table.test.ts 中，我們知道 foldSize=3 的 "Doubles" (2/3) 的 ID 是 "4"
    // 它的 combinationCount 是 3
    const table = getCombinationBetReferenceTable(3)
    let systemBetOption: CombinationBetOption
    table.options.forEach(opt => {
        if (opt.combinationCount === 3) {
            systemBetOption = opt // System 2/3 (Doubles)
            expect(systemBetOption.id).toBe("4")
            expect(systemBetOption.fallbackName()).toBe("System 2/3")
            expect(systemBetOption.parameters.length).toBe(1)
            expect(systemBetOption.parameters[0].foldSize).toBe(3)
            expect(systemBetOption.parameters[0].combSelectNum).toBe(2)
        }
    })


    it("should correctly calculate for a system bet (e.g., System 2/3)", () => {
        const inputs = [
            {
                perStakeAmount: "10",
                combinationBetOptionId: systemBetOption.id, // System 2/3
                combinationBetOption: systemBetOption,
                odds: ["1.5", "2.0", "3.0"],
                equivalentOdds: "4.5", // 13.5 / 3
            },
        ]

        const result = calculateTotalStakeAndMaxPayout(inputs)

        // combinationCount for System 2/3 is 3 (C(3,2))
        // Total stake = perStakeAmount * combinationCount = 10 * 3 = 30
        expect(systemBetOption.combinationCount).toBe(3)
        expect(result.totalStake.toString()).toBe("30")

        // Max payout = perStakeAmount * sum of odds products for each combination
        // Combinations: (1.5 * 2.0) + (1.5 * 3.0) + (2.0 * 3.0) = 3 + 4.5 + 6 = 13.5
        // Payout = 10 * 13.5 = 135
        expect(result.maxPayout.toString()).toBe("135")
        expect(result.totalOdds.toString()).toBe("4.5") // 135 / 30

        inputs.forEach(input => {
            expect(calculateEquivalentOddsFromBetOption(input.odds, input.combinationBetOption).toFixed(1)).toBe(input.equivalentOdds)
        })
    })

    it("should throw an error if odds array is empty for single/parlay", () => {
        const inputs = [{ perStakeAmount: "10", odds: [] }]
        expect(() => calculateTotalStakeAndMaxPayout(inputs)).toThrow("odds length cannot be 0")
    })

    it("should throw an error if total stake is zero", () => {
        const inputs = [{ perStakeAmount: "0", odds: ["1.5"] }]
        expect(() => calculateTotalStakeAndMaxPayout(inputs)).toThrow("totalStake cannot be zero")
    })

    it("should throw an error for an invalid combinationBetOptionId", () => {
        const inputs = [{ perStakeAmount: "10", combinationBetOptionId: "invalid-id", odds: ["1.5", "2.0"] }]
        expect(() => calculateTotalStakeAndMaxPayout(inputs)).toThrow("CombinationBetOption with id invalid-id not found")
    })
})