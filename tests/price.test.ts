import fs from "fs"
import path from "path"

import { parse } from "csv-parse/sync"
import { PriceType, toPrice } from "../src/price"
import Decimal from "decimal.js"

type PriceConversion = {
    Decimal: string
    HK: string
    Malay: string
    Indo: string
    UK: string
    US: string
}

test("test Decimal to all price conversions", () => {
    const filePath = path.resolve(__dirname, "__fixtures__", "price-conversions.csv")
    const fileContent = fs.readFileSync(filePath, "utf-8")

    const records: PriceConversion[] = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
    })

    expect(records).toContainEqual({
        Decimal: "1.01",
        HK: "0.01",
        Malay: "0.01",
        Indo: "-100",
        UK: "1/100",
        US: "-10000",
    })

    records.forEach(row => {
        const decimal = toPrice(row.Decimal, PriceType.DECIMAL)
        const hk = toPrice(row.Decimal, PriceType.HK)
        const malay = toPrice(row.Decimal, PriceType.MALAY)
        const indo = toPrice(row.Decimal, PriceType.INDO)
        const uk = toPrice(row.Decimal, PriceType.FRACTIONAL)
        const us = toPrice(row.Decimal, PriceType.MONEY_LINE)

        const decimalDec = Decimal(decimal)
        const hkDec = Decimal(hk)
        const malayDec = Decimal(malay)
        const indoDec = Decimal(indo)
        const usDec = Decimal(us)

        expect(decimalDec.toFixed(8)).toBe(Decimal(row.Decimal).toFixed(8))
        expect(hkDec.toFixed(8)).toBe(Decimal(row.HK).toFixed(8))
        expect(malayDec.toFixed(8)).toBe(Decimal(row.Malay).toFixed(8))
        expect(indoDec.toFixed(8)).toBe(Decimal(row.Indo).toFixed(8))
        expect(usDec.toFixed(8)).toBe(Decimal(row.US).toFixed(8))
        expect(uk).toBe(row.UK)
    })
})
