import Decimal from "decimal.js"
import { getCombinationBetReferenceTable } from "./combination-bet"

/**
 * 分頁資訊
 */
export interface Pagination {
    /**
     * 當前頁數
    */
    page: number
    /**
     * 總數量
     */
    total: number
    /**
     * 一頁的數量
     */
    pageSize: number
    /**
     * 總頁數
     */
    pages: number
    /**
     * 是否有下一頁
     */
    hasNext: boolean
    /**
     * 是否有上一頁
     */
    hasPrev: boolean
}

/**
 * 每列子注的配對項次跟結算賠率
 */
export interface CombinationBetItem {
    betIndices: number[]
    settledOdds: Decimal
}

/**
 * 複式投注裡面，所有子注的結算賠率細項
 */
export interface CombinationBetDetail {
    /**
     * 分頁資訊
     */
    pagination: Pagination
    /**
     * 每列子注的配對項次跟結算賠率
     */
    items: CombinationBetItem[]
    /**
     * 排列組合總數
     */
    combinationCount: number
    /**
     * 複式投注ID
     */
    combinationBetOptionId: string
    /**
     * 抓取的bet數量
     */
    foldSize: number
}

export interface CalculateCombinationBetDetailInput {
    /**
     * 複式投注ID
     */
    combinationBetOptionId: string
    /**
     * 即Order.legs裡面的payoutPrice，也就是結算的賠率
     */
    payoutPrices: string[]
    /**
     * 指定的頁數，從第1頁開始
     */
    page: number
    /**
     * 指定一個要有幾列，預設為10
     */
    pageSize?: number
}

/**
 * 計算指定複式投注選項的所有子注單組合及其詳細資訊。
 *
 * 此函式會根據給定的 `combinationBetOptionId`（例如 "System 2/4"）和一組賠率，
 * 生成構成該複式投注的所有獨立串關組合。它會計算每個子組合的結算賠率，並支援分頁返回結果。
 *
 * @param input - 計算詳細資訊所需的參數物件。
 * @param input.combinationBetOptionId - 複式投注選項的 ID，可從 `getCombinationBetReferenceTable` 取得或者用戶Order裡取得。
 * @param input.payoutPrices - 一個包含所有選項結算賠率的字串陣列。
 * @param input.page - 指定要查詢的頁數，從 1 開始。
 * @param input.pageSize - 每頁顯示的項目數量，預設為 10。
 * @returns 一個 `CombinationBetDetail` 物件，包含分頁資訊和該頁的子注單組合列表。
 * @throws 如果找不到對應的 `combinationBetOptionId`，或賠率數量與選項的 `foldSize` 不符，則會拋出錯誤。
 *
 * @example
 * ```typescript
 * const detail = calculateCombinationBetDetail({
 *   combinationBetOptionId: '8', // System 2/4
 *   payoutPrices: ["1.5", "2.0", "2.5", "3.0"],
 *   page: 1,
 *   pageSize: 4
 * });
 * console.log(detail.items);
 * // [ { betIndices: [1, 2], settledOdds: new Decimal("3") }, ... ]
 * ```
 */
export function calculateCombinationBetDetail(input: CalculateCombinationBetDetailInput): CombinationBetDetail {
    const { combinationBetOptionId, payoutPrices, page, pageSize = 10 } = input

    const foldSize = payoutPrices.length
    const table = getCombinationBetReferenceTable(foldSize)
    const combinationBetOption = table.options.find(opt => opt.id === combinationBetOptionId)

    if (!combinationBetOption) {
        throw new Error(`CombinationBetOption with id ${combinationBetOptionId} not found for foldSize ${foldSize}`)
    }
    if (combinationBetOption.foldSize !== foldSize) {
        throw new Error(`CombinationBetOption with id ${combinationBetOptionId} has foldSize ${combinationBetOption.foldSize}, but provided payoutPrices has length ${foldSize}`)
    }
    if (page < 1) {
        throw new Error(`Invalid page number: ${page}`)
    }
    if (pageSize < 1) {
        throw new Error(`Invalid page size: ${pageSize}`)
    }
    

    // Helper function to get combinations, return all the possible combination of allIndices select k
    function getCombinations(allIndices: number[], k: number): number[][] {
        const result: number[][] = []
        function backtrack(start: number, currentCombination: number[]) {
            if (currentCombination.length === k) {
                result.push([...currentCombination])
                return
            }
            for (let i = start; i < allIndices.length; i++) {
                currentCombination.push(allIndices[i])
                backtrack(i + 1, currentCombination)
                currentCombination.pop()
            }
        }
        backtrack(0, [])
        return result
    }

    const items: CombinationBetItem[] = []
    const payoutOdds = payoutPrices.map(p => new Decimal(p))
    // 做出1 ~ foldSize
    const allIndices = Array.from({ length: payoutOdds.length }, (_, i) => i + 1)

    const totalCombinations = combinationBetOption.combinationCount
    const totalPages = Math.ceil(totalCombinations / pageSize)
    const startIndex = (page - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize, totalCombinations)

    let irow = 0
    for (const param of combinationBetOption.parameters) {
        // 超過了就不用再計算浪費算力了
        if (irow >= endIndex) {
            break
        }
        const combinationsOfIndices = getCombinations(allIndices, param.combSelectNum)
        for (const betIndices of combinationsOfIndices) {
            if (irow >= startIndex && irow < endIndex) {
                // 只有真正要輸出時，才運算odds
                const settledOdds = betIndices.map(i => payoutOdds[i - 1]).reduce((a, b) => a.times(b), new Decimal(1))
                items.push({ betIndices, settledOdds })
            }
            irow++
        }
    }

    return {
        pagination: {
            page,
            total: combinationBetOption.combinationCount,
            pageSize,
            pages: totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
        },
        items,
        combinationCount: combinationBetOption.combinationCount,
        combinationBetOptionId,
        foldSize,
    }
}