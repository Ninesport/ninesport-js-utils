import Decimal from "decimal.js"
import { calculateEquivalentOddsWithoutDiv, combinations } from "./combinations"

// From model/init.go
const MAX_FOLD_SIZE = 30

/**
 * Represents the parameters for a single part of a combination bet.
 * e.g., for a "System 2/4", one parameter would be { foldSize: 4, combSelectNum: 2 }
 */
export interface CombinationBetParameter {
  foldSize: number;
  combSelectNum: number;
}

/**
 * Represents a specific combination betting option, like "Single", "Double", "Treble", or "System 2/4".
 */
export interface CombinationBetOption {
  id: string;
  // 就是選擇的bets數量
  foldSize: number;
  // 該複式投注ID的串關總數
  combinationCount: number;
  parameters: CombinationBetParameter[];
  /** Returns a fallback name, e.g., "4x11". 
   * 如果找不到翻譯，可以使用這個值作為該bet id 的翻譯
  */
  fallbackName: () => string;
}

/**
 * A reference table containing all possible combination bet options for a given number of selections (foldSize).
 * 該foldSize的所有可能的複式串關組合
 */
export interface CombinationBetReferenceTable {
  foldSize: number;
  options: CombinationBetOption[];
}

/**
 * CombinationBetOptionId -> CombinationBetOption
 */
type CombinationBetOptionsMap = Map<string, CombinationBetOption>

/**
 * FoldSize -> CombinationBetReferenceTable
 */
type CominationBetReferenceTableMap = Map<number, CombinationBetReferenceTable>


/**
 * Creates a reference table for a given fold size.
 * This is a private helper function.
 * @param lastID The last used ID to ensure uniqueness.
 * @param foldSize The number of selections.
 * @returns A tuple containing the new last ID and the generated table.
 */
function createCombinationBetReferenceTable(lastID: number, foldSize: number): [number, CombinationBetReferenceTable] {
    if (foldSize === 0) {
        throw new Error("foldSize cannot be 0")
    }
    lastID++

    const createOption = (id: string, count: number, params: CombinationBetParameter[]): CombinationBetOption => {
        const option: CombinationBetOption = {
            id,
            foldSize,
            combinationCount: count,
            parameters: params,
            fallbackName: function() { 
                if (this.parameters.length === 1) {
                    return `System ${this.parameters[0].combSelectNum}/${this.foldSize}`
                }
                return `${this.foldSize}X${this.combinationCount}` 
            },
        }
        return option
    }

    if (foldSize === 1 || foldSize === 2) {
        const table: CombinationBetReferenceTable = {
            foldSize,
            options: [
                createOption(lastID.toString(), 1, [{ foldSize, combSelectNum: foldSize }]),
            ],
        }
        return [lastID, table]
    }

    const output: CombinationBetReferenceTable = {
        foldSize,
        options: [
            createOption(lastID.toString(), 1, [{ foldSize, combSelectNum: foldSize }]),
        ],
    }

    const last2Params: CombinationBetParameter[] = []
    let last2Count = 0

    const last1Params: CombinationBetParameter[] = []
    let last1Count = 0

    for (let combSelectNum = 2; combSelectNum <= foldSize; combSelectNum++) {
        const combinationCount = combinations(foldSize, combSelectNum)
        const param: CombinationBetParameter = { foldSize, combSelectNum }
    
        if (combSelectNum !== foldSize) {
            lastID++
            const option = createOption(lastID.toString(), combinationCount, [param])
            output.options.push(option)
        }

        last2Params.push(param)
        last2Count += combinationCount

        last1Params.push(param)
        last1Count += combinationCount
    }

    lastID++
    const last2Option = createOption(lastID.toString(), last2Count, last2Params)
    output.options.push(last2Option)

    lastID++
    last1Count += foldSize // Add C(n,1)
    last1Params.push({ foldSize, combSelectNum: 1 })
    const last1Option = createOption(lastID.toString(), last1Count, last1Params)
    output.options.push(last1Option)

    return [lastID, output]
}

/**
 * Initializes and returns all combination bet reference tables and maps.
 * This function should be called once to generate the static betting data.
 * @returns An object containing all the generated combination data.
 */
function initCombinationBetReferenceTableMap() {
    const combinationBetReferenceTablesMap: CominationBetReferenceTableMap = new Map<number, CombinationBetReferenceTable>()
    const combinationBetOptionsMap: CombinationBetOptionsMap = new Map<string, CombinationBetOption>()
    // const combinationBetOptions = new Map<string, CombinationBetOption>()

    let lastID = 0
    for (let foldSize = 1; foldSize <= MAX_FOLD_SIZE; foldSize++) {
        const [newLastID, table] = createCombinationBetReferenceTable(lastID, foldSize)
        lastID = newLastID
        combinationBetReferenceTablesMap.set(foldSize, table)

        for (const opt of table.options) {
            if (combinationBetOptionsMap.has(opt.id)) {
                throw new Error(`CombinationBetOption with id ${opt.id} already exists`)
            }
            combinationBetOptionsMap.set(opt.id, opt)
        }
    }

    return {
        combinationBetOptionsMap,
        combinationBetReferenceTablesMap,
    }
}

// import 的時候就直接初始化
const { combinationBetOptionsMap, combinationBetReferenceTablesMap } = initCombinationBetReferenceTableMap()

/** 
 * 取得複式投注表格
 * @param foldSize 當用戶在購物車選好了bets, 例如4個bets, foldSize = 4
 * @returns 該foldSize的複式投注表格，即: CombinationBetReferenceTable
*/
export function getCombinationBetReferenceTable(foldSize: number): CombinationBetReferenceTable {
    const table = combinationBetReferenceTablesMap.get(foldSize)
    if (!table) {
        throw new Error(`CombinationBetReferenceTable for foldSize ${foldSize} not found`)
    }
    return table
}

export type CreateOrderParams = {
    /** 
     * 每注下注金額
    */ 
    perStakeAmount: string
    /** 
     * 複式串關選項的id, 不填代表單注或者串關
    */ 
    combinationBetOptionId?: string
    /** 
     * 每個bets的賠率(actualPrice)
    */ 
    odds: string[]
}

export type StakeAndPayout = {
    /**
     等效總賠率(可能會有無窮小數)
    */
    totalOdds: Decimal
    /** 
     總下注金額(不會有無窮小數)
    */
    totalStake: Decimal
    /** 
     預期最大賠付(不會有無窮小數)
    */
    maxPayout: Decimal
}


/**
  
* 計算給定一組賠率和一個可選組合投注選項的加總賠率(沒有除以combinationCount)。
*
* @param odds 一個字串數組，表示每個選項的賠率。
* @param combinationBetOption 一個可選的組合投注選項 (CombinationBetOption) 物件。如果提供，則指定
* 賠率的組合方式（例如，系統投注）。
* 如果未提供，則預設為單注（如果 odds.length 為 1）
* 或過關投注（如果 odds.length > 1）。
* @returns 一個 Decimal 對象，表示所選組合的積總和。
* @throws 如果賠率數量與組合投注選項 (combinationBetOption) 的 foldSize 不匹配，
* 或未提供組合投注選項 (combinationBetOption) 時賠率數組為空，則拋出錯誤。

*/
function calculateEquivalentOddsWithoutDivFromBetOption(odds: string[], combinationBetOption?: CombinationBetOption): Decimal {
    if (combinationBetOption && combinationBetOption.foldSize !== odds.length) {
        throw new Error(`The number of odds (${odds.length}) must match the foldSize of the combinationBetOption (${combinationBetOption.foldSize}).`)
    }

    if (!combinationBetOption) {
        if (odds.length === 1) {
            // single bet
            return new Decimal(odds[0])
        } else if (odds.length > 1) {
            // parlay
            const oddsInDecimal = odds.map(odd => new Decimal(odd))
            const eqOddsWithoutDiv = calculateEquivalentOddsWithoutDiv(oddsInDecimal, oddsInDecimal.length)
            return eqOddsWithoutDiv                
        } else {
            throw new Error("odds length cannot be 0")
            
        }
    } 

    let totalEquivalentOdds = new Decimal(0)
    const oddsInDecimal = odds.map(odd => new Decimal(odd))
    combinationBetOption.parameters.forEach(p => {
        const eqOddsWithoutDiv = calculateEquivalentOddsWithoutDiv(oddsInDecimal, p.combSelectNum)
        totalEquivalentOdds = totalEquivalentOdds.add(eqOddsWithoutDiv)
    })

    return totalEquivalentOdds
}

/**
  
* 計算給定一組賠率和一個可選組合投注選項的等效賠率。
*
* @param odds 一個字串數組，表示每個選項的賠率。
* @param combinationBetOption 一個可選的組合投注選項 (CombinationBetOption) 物件。如果沒有提供，程式會自行判斷是串關還是單注。
* @returns 回傳等效賠率。
* @throws 如果賠率數量與組合投注選項 (combinationBetOption) 的 foldSize 不匹配，
* 或未提供組合投注選項 (combinationBetOption) 時賠率數組為空，則拋出錯誤。

*/
export function calculateEquivalentOddsFromBetOption(odds: string[], combinationBetOption?: CombinationBetOption): Decimal {
    
    const oddsWithoutDiv = calculateEquivalentOddsWithoutDivFromBetOption(odds, combinationBetOption)
    if (!combinationBetOption) {
        // combinationCount必定為1
        return oddsWithoutDiv
    }

    if (combinationBetOption.combinationCount === 0) {
        throw new Error("combinationCount cannot be 0")
    }

    return oddsWithoutDiv.div(combinationBetOption.combinationCount)
}

/**
 * 
 * 計算總下注金額和最大賠付
 * @param inputs 每個投注項的參數，包含每注金額、複式投注選項ID（可選）和賠率數組。
 
 * @returns 回傳計算出來的 賠率 下注金額 最大賠付
*/
export function calculateTotalStakeAndMaxPayout(inputs: CreateOrderParams[]): StakeAndPayout {
    let totalStake = new Decimal(0)
    let maxPayout = new Decimal(0)

    for (const input of inputs) {
        const { perStakeAmount, combinationBetOptionId, odds } = input
        const perStakeAmountInDecimal = new Decimal(perStakeAmount)
        let combinationBetOption: CombinationBetOption | undefined

        if (combinationBetOptionId) {
            combinationBetOption = combinationBetOptionsMap.get(combinationBetOptionId)
            if (!combinationBetOption) {
                throw new Error(`CombinationBetOption with id ${combinationBetOptionId} not found`)
            }
            
               
        }
        const equivalentOddsWithoutDiv = calculateEquivalentOddsWithoutDivFromBetOption(odds, combinationBetOption)
        maxPayout = maxPayout.add(perStakeAmountInDecimal.mul(equivalentOddsWithoutDiv))
        totalStake = totalStake.add(perStakeAmountInDecimal.mul(combinationBetOption?.combinationCount ?? 1))
        continue

    }

    if (totalStake.isZero()) {
        throw new Error("totalStake cannot be zero")
    }


    return {
        totalOdds: maxPayout.div(totalStake),
        totalStake: totalStake,
        maxPayout: maxPayout,
    }
}