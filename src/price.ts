import Decimal from "decimal.js"

/**
 * In the View layer, Price is represented as a string derived from a ratio string + PriceType.
 */
export type Price = string

const TWO: Decimal = new Decimal(2)
const ONE: Decimal = new Decimal(1)
const NEG_ONE: Decimal = new Decimal(-1)
const NEG_ONE_HUNDRED: Decimal = new Decimal(-100)
const ONE_HUNDRED: Decimal = new Decimal(100)


/**
 * Converts a ratio string to a Price string based on the specified PriceType.
 * @param valueString The ratio string to convert, 這個就是後端收到的Ratio(string).
 * @param priceType The type of price to convert to, 指定前端要顯示的PriceType.
 * @returns The formatted Price string.
 */
export function toPrice(valueString: string, priceType: PriceType): Price {
    let valueDecimal: Decimal
    try {
        valueDecimal = new Decimal(valueString)
    } catch (e) {
        console.error(`Invalid decimal string provided: ${valueString}, priceType: ${priceTypeToString(priceType)}[${priceType}]`, e)
        return "Invalid Input" // Or throw error, or handle as per application requirements
    }

    switch (priceType) {
    case PriceType.DECIMAL:
        return valueDecimal.toString()
    case PriceType.MONEY_LINE:
        if (valueDecimal.greaterThanOrEqualTo(TWO)) {
            return "+" + valueDecimal.sub(ONE).mul(ONE_HUNDRED).toString()
        } else {
            const denominator = valueDecimal.sub(ONE)
            if (denominator.isZero()) {
                // Handle division by zero if value.decimal is 1 (denominator becomes 0)
                return "NaN" // Or handle as per application logic, e.g., throw error
            }
            return NEG_ONE_HUNDRED.div(denominator).toString()
        }
    case PriceType.HK:
        return valueDecimal.sub(ONE).toString()
    case PriceType.MALAY:
        if (valueDecimal.greaterThanOrEqualTo(TWO)) {
            const denominator = valueDecimal.sub(ONE)
            if (denominator.isZero()) return "NaN"
            return NEG_ONE.div(denominator).toString()
        } else {
            // 当马来盘是正数(香港赔率小于1.00)时，它和香港盘是一样的，其赢利公式也和香港盘一样。
            return valueDecimal.sub(ONE).toString()
        }
    case PriceType.INDO:
        if (valueDecimal.greaterThanOrEqualTo(TWO)) {
            return valueDecimal.sub(ONE).toString()
        } else {
            const denominator = valueDecimal.sub(ONE)
            if (denominator.isZero()) return "NaN"
            return NEG_ONE.div(denominator).toString()
        }
    case PriceType.FRACTIONAL:
        const numerator = valueDecimal.sub(ONE).mul(new Decimal(100))
        return `${numerator.toString()}/100`
    default:
        return valueDecimal.toString()
    }
}

/**
 * Enum representing different types of price displays.
 * 1: European odds (decimal format), 歐洲盤, 即最常見的分數式
 * 2: American odds (moneyline format), 美金盤
 * 3: Hong Kong odds, 香港盤 (歐洲盤 - 1)
 * 4: Malaysian odds, 馬來盤
 * 5: Indonesian odds, 印尼盤
 * 6: UK/Fractional odds, 英式盤, 例：500/100,  表示下注 100 賺 500
 */
export enum PriceType {
    DECIMAL = 1, // European odds (decimal format)
    MONEY_LINE, // American odds
    HK, // Hong Kong odds
    MALAY, // Malaysian odds
    INDO, // Indonesian odds
    FRACTIONAL, // UK/Fractional odds
}

export const PriceTypes: PriceType[] = [
    PriceType.DECIMAL,
    PriceType.MONEY_LINE,
    PriceType.FRACTIONAL,
    PriceType.MALAY,
    PriceType.INDO,
    PriceType.HK,
]

export const priceTypeStrMap: Record<PriceType, string> = {
    [PriceType.DECIMAL]: "Decimal",
    [PriceType.MONEY_LINE]: "Money Line",
    [PriceType.HK]: "HK",
    [PriceType.MALAY]: "Malay",
    [PriceType.INDO]: "Indo",
    [PriceType.FRACTIONAL]: "Fractional",
}

/**
 * Checks if a given PriceType is valid based on the Go definition (1 to 6).
 * @param p The PriceType to validate.
 * @returns True if valid, false otherwise.
 */
export function isPriceTypeValid(p: PriceType): boolean {
    return p >= PriceType.DECIMAL && p <= PriceType.FRACTIONAL
}

/**
 * Gets the string representation of a PriceType.
 * @param p The PriceType.
 * @returns The string representation, or "Unknown PriceType" if not found.
 */
export function priceTypeToString(p: PriceType): string {
    return priceTypeStrMap[p] || "Unknown PriceType"
}
