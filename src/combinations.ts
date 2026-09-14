import Decimal from "decimal.js"
import { maxFoldSize } from "./combination-bet"

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
    if (n > maxFoldSize()) {
        // raise error
        throw new Error(`The number of odds (${n}) exceeds the maximum allowed fold size (${maxFoldSize()}).`)
    }

    // 取得前 k 大的賠率乘積，判斷是否有任何組合超過上限 maxBetOdds
    const sortedOdds = [...odds].sort((a, b) => b.comparedTo(a))
    let maxProduct = new Decimal(1)
    for (let i = 0; i < k; i++) {
        maxProduct = maxProduct.times(sortedOdds[i])
    }
    const isOver = maxProduct.gt(maxBetOdds)

    // 特例優化：k = 1 時為所有賠率之和
    if (k === 1) {
        let sum = new Decimal(0)
        for (const odd of odds) {
            sum = sum.plus(odd)
        }
        return [sum, isOver]
    }

    // 特例優化：k = n 時為所有賠率之乘積
    if (k === n) {
        return [maxProduct, isOver]
    }

    // 動態規劃 (DP) 計算初等對稱多項式 e_k(odds)
    const dp: Decimal[] = Array.from({ length: k + 1 }, (_, idx) => (idx === 0 ? new Decimal(1) : new Decimal(0)))

    for (let i = 0; i < n; i++) {
        const odd = odds[i]
        const maxJ = Math.min(i + 1, k)
        for (let j = maxJ; j >= 1; j--) {
            if (j === 1) {
                dp[1] = dp[1].plus(odd)
            } else {
                dp[j] = dp[j].plus(dp[j - 1].times(odd))
            }
        }
    }

    return [dp[k], isOver]
}

