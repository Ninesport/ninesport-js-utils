import Decimal from "decimal.js"
import { MAX_FOLD_SIZE } from "./combination-bet"

/**
 * Calculates the number of combinations (nCk) without repetition.
 * @param n The total number of items.
 * @param k The number of items to choose.
 * @returns The number of combinations.
 */
export function combinations(n: number, k: number): number {
    if (k < 0 || k > n) {
        return 0
    }
    if (k === 0 || k === n) {
        return 1
    }
    // Use symmetry to reduce calculations: nCk = nC(n-k)
    if (k > n - k) {
        k = n - k
    }
    let result = 1
    for (let i = 1; i <= k; i++) {
        result = result * (n - i + 1) / i
    }
    return result
}

/**
 * A private recursive helper for `calculateEquivalentOddsWithoutDiv`.
 * It uses Depth-First Search (DFS) to find all combinations and sum their products.
 * @returns [Decimal, boolean] The sum of products for this recursive path and whether any combination exceeded max odds.
 */
function dfsHelper(
    odds: Decimal[],
    maxBetOdds: Decimal,
    k: number,
    startIndex: number,
    currentProduct: Decimal,
    currentDepth: number,
): [Decimal, boolean] {
    if (currentDepth === k) {
        return [currentProduct, currentProduct.gt(maxBetOdds)]
    }

    let sum = new Decimal(0)
    let isOver = false
    for (let i = startIndex; i < odds.length; i++) {
        const [pathSum, pathIsOver] = dfsHelper(odds, maxBetOdds, k, i + 1, currentProduct.times(odds[i]), currentDepth + 1)
        sum = sum.plus(pathSum)
        if (pathIsOver) {
            isOver = true
        }
    }
    return [sum, isOver]
}

/**
 * Calculates the sum of products of all combinations of `k` odds selected from `n` odds,
 * without dividing by the total number of combinations.
 * This function requires the 'decimal.js' library for arbitrary-precision arithmetic.
 * @param odds An array of Decimal objects representing the odds.
 * @param k The number of odds to select in each combination.
 * @returns [Decimal, boolean], A Decimal object representing the sum of products. A boolean is over bet limit.
 */
export function calculateEquivalentOddsWithoutDiv(odds: Decimal[], maxBetOdds: Decimal, k: number): [Decimal, boolean] {
    const n = odds.length
    if (k <= 0 || k > n) {
        return [new Decimal(0), false]
    }
    if (n > MAX_FOLD_SIZE) {
        // raise error
        throw new Error(`The number of odds (${n}) exceeds the maximum allowed fold size (${MAX_FOLD_SIZE}).`)
    }

    // Start the DFS with an initial product of 1 and depth 0
    return dfsHelper(odds, maxBetOdds, k, 0, new Decimal(1), 0)
}
