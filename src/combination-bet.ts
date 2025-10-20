import Decimal from "decimal.js"
import { calculateEquivalentOddsWithoutDiv, combinations } from "./combinations"

interface Config {
  MAX_FOLD_SIZE: number;
  MAX_COMBINATION_COUNT: number;
}

const config: Config = {
    MAX_FOLD_SIZE: 30,
    MAX_COMBINATION_COUNT: 1000,
}

export function maxFoldSize(): number {
    return config.MAX_FOLD_SIZE
}

export function maxCombinationCount(): number {
    return config.MAX_COMBINATION_COUNT
}

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

    // only reserve the options which's combnationCount <= MAX_COMBINATION_COUNT, but keep the id unchanged
    output.options = output.options.filter(option => option.combinationCount <= config.MAX_COMBINATION_COUNT)


    return [lastID, output]
}

/**
 * Initializes and returns all combination bet reference tables and maps.
 * This function should be called once to generate the static betting data.
 * @returns An object containing all the generated combination data.
 */
function initCombinationBetReferenceTableMap(): { combinationBetOptionsMap: CombinationBetOptionsMap, combinationBetReferenceTablesMap: CominationBetReferenceTableMap } {
    const combinationBetReferenceTablesMap: CominationBetReferenceTableMap = new Map<number, CombinationBetReferenceTable>()
    const combinationBetOptionsMap: CombinationBetOptionsMap = new Map<string, CombinationBetOption>()
    // const combinationBetOptions = new Map<string, CombinationBetOption>()

    let lastID = 0
    for (let foldSize = 1; foldSize <= config.MAX_FOLD_SIZE; foldSize++) {
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

let initializedData = initCombinationBetReferenceTableMap()

/**
 * Configures the global settings for the combination bet calculations.
 * This function should be called once at the application's entry point, before any other functions from this library are used.
 * Calling this function will re-initialize the reference tables.
 * @param options - The configuration options to set.
 * @example
 * ```
 * import { configureCombinationBets } from 'ninesport-js-utils/combination-bet';
 * 
 * configureCombinationBets({ MAX_FOLD_SIZE: 20, MAX_COMBINATION_COUNT: 500 });
 * ```
 */
export function configureCombinationBets(options: Partial<Config>) {
    if (options.MAX_FOLD_SIZE !== undefined) {
        config.MAX_FOLD_SIZE = options.MAX_FOLD_SIZE
    }
    if (options.MAX_COMBINATION_COUNT !== undefined) {
        config.MAX_COMBINATION_COUNT = options.MAX_COMBINATION_COUNT
    }
    // Re-initialize the tables with the new configuration
    initializedData = initCombinationBetReferenceTableMap()
}


/** 
 * 取得複式投注表格
 * @param foldSize 當用戶在購物車選好了bets, 例如4個bets, foldSize = 4
 * @returns 該foldSize的複式投注表格，即: CombinationBetReferenceTable
*/
export function getCombinationBetReferenceTable(foldSize: number): CombinationBetReferenceTable {
    const table = initializedData.combinationBetReferenceTablesMap.get(foldSize)
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
    equivalentOdds: Decimal
    /** 
     總下注金額(不會有無窮小數)
    */
    totalStake: Decimal
    /** 
     預期最大賠付(不會有無窮小數)
    */
    maxPayout: Decimal
    // 所有注單裡面是否有任何一關串關賠率 > maxBetOdds
    isOverMaxOdds: boolean
}


/**
  
* 計算給定一組賠率和一個可選組合投注選項的加總賠率(沒有除以combinationCount)。
*
* @param odds 一個字串數組，表示每個選項的賠率。
* @param combinationBetOption 一個可選的組合投注選項 (CombinationBetOption) 物件。如果提供，則指定
* 賠率的組合方式（例如，系統投注）。
* 如果未提供，則預設為單注（如果 odds.length 為 1）
* 或過關投注（如果 odds.length > 1）。
* @returns [Decimal, boolean] 一個 Decimal 對象，表示所選組合的積總和, 一個boolean: 表示是否超出單關下注賠率
* @throws 如果賠率數量與組合投注選項 (combinationBetOption) 的 foldSize 不匹配，
* 或未提供組合投注選項 (combinationBetOption) 時賠率數組為空，則拋出錯誤。

*/
function calculateEquivalentOddsWithoutDivFromBetOption(odds: string[], maxBetOdds: string, combinationBetOption?: CombinationBetOption): [Decimal, boolean] {
    if (combinationBetOption && combinationBetOption.foldSize !== odds.length) {
        throw new Error(`The number of odds (${odds.length}) must match the foldSize of the combinationBetOption (${combinationBetOption.foldSize}).`)
    }

    const maxBetOddsInDecimal = new Decimal(maxBetOdds)

    if (!combinationBetOption) {
        if (odds.length === 1) {
            // single bet
            const oddsInDecimal = new Decimal(odds[0])
            return [oddsInDecimal, oddsInDecimal.gt(maxBetOddsInDecimal)]
        } else if (odds.length > 1) {
            // parlay
            const oddsInDecimal = odds.map(odd => new Decimal(odd))
            return calculateEquivalentOddsWithoutDiv(oddsInDecimal, maxBetOddsInDecimal, oddsInDecimal.length)
        } else {
            throw new Error("odds length cannot be 0")
            
        }
    } 

    let totalEquivalentOdds = new Decimal(0)
    let isOverMaxOdds = false
    const oddsInDecimal = odds.map(odd => new Decimal(odd))
    combinationBetOption.parameters.forEach(p => {
        const [eqOddsWithoutDiv, isOver] = calculateEquivalentOddsWithoutDiv(oddsInDecimal, maxBetOddsInDecimal, p.combSelectNum)
        if (isOver) {
            isOverMaxOdds = true
        }
        totalEquivalentOdds = totalEquivalentOdds.add(eqOddsWithoutDiv)
    })

    return [totalEquivalentOdds, isOverMaxOdds]
}

type EquivalentOddsFromBetOption = {
    // 該CombinationBetOption的等效賠率
    equivalentOdds: Decimal
    // 該注單裡面，有沒有任何串關的賠率大於maxBetOdds
    isOverMaxOdds: boolean
}

/**
  
* 計算給定一組賠率和一個可選組合投注選項的等效賠率。
*
* @param odds 一個字串數組，表示每個選項的賠率。
* @param combinationBetOption 一個可選的組合投注選項 (CombinationBetOption) 物件。如果沒有提供，程式會自行判斷是串關還是單注。
* @returns EquivalentOddsFromBetOption: 等效賠率 有沒有任何串關的賠率大於maxBetOdds
* @throws 如果賠率數量與組合投注選項 (combinationBetOption) 的 foldSize 不匹配，
* 或未提供組合投注選項 (combinationBetOption) 時賠率數組為空，則拋出錯誤。

*/
export function calculateEquivalentOddsFromBetOption(odds: string[], maxBetOdds: string, combinationBetOption?: CombinationBetOption): EquivalentOddsFromBetOption {
    
    
    const [oddsWithoutDiv, isOverMaxOdds] = calculateEquivalentOddsWithoutDivFromBetOption(odds, maxBetOdds, combinationBetOption)
    if (!combinationBetOption) {
        // combinationCount必定為1
        return {
            equivalentOdds: oddsWithoutDiv,
            isOverMaxOdds: isOverMaxOdds,
        }
    }

    if (combinationBetOption.combinationCount === 0) {
        throw new Error("combinationCount cannot be 0")
    }

    return {
        equivalentOdds: oddsWithoutDiv.div(combinationBetOption.combinationCount),
        isOverMaxOdds: isOverMaxOdds,
    }
}

/**
 * 
 * 計算總下注金額和最大賠付
 * @param inputs 每個投注項的參數，包含每注金額、複式投注選項ID（可選）和賠率數組。
 
 * @returns 回傳計算出來的 賠率 下注金額 最大賠付 是否任意一串關超出最大賠率
*/
export function calculateTotalStakeAndMaxPayout(inputs: CreateOrderParams[], maxBetOdds: string): StakeAndPayout {
    let totalStake = new Decimal(0)
    let maxPayout = new Decimal(0)
    let isOverMaxOdds = false


    for (const input of inputs) {
        const { perStakeAmount, combinationBetOptionId, odds } = input
        const perStakeAmountInDecimal = new Decimal(perStakeAmount)
        let combinationBetOption: CombinationBetOption | undefined

        if (combinationBetOptionId) {
            combinationBetOption = initializedData.combinationBetOptionsMap.get(combinationBetOptionId)
            if (!combinationBetOption) {
                throw new Error(`CombinationBetOption with id ${combinationBetOptionId} not found`)
            }
            
               
        }
        const [equivalentOddsWithoutDiv, isOver] = calculateEquivalentOddsWithoutDivFromBetOption(odds, maxBetOdds, combinationBetOption)
        if (isOver) {
            isOverMaxOdds = true
        }
        maxPayout = maxPayout.add(perStakeAmountInDecimal.mul(equivalentOddsWithoutDiv))
        totalStake = totalStake.add(perStakeAmountInDecimal.mul(combinationBetOption?.combinationCount ?? 1))
        continue

    }

    if (totalStake.isZero()) {
        throw new Error("totalStake cannot be zero")
    }


    return {
        equivalentOdds: maxPayout.div(totalStake),
        totalStake: totalStake,
        maxPayout: maxPayout,
        isOverMaxOdds: isOverMaxOdds,
    }
}