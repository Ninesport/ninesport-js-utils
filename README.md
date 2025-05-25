# Ninesport JS Utils - Price Conversion

本文檔說明如何使用 `ninesport-js-utils` 套件中的函數:
- `toPrice` 函數，該函數用於將賠率從標準小數格式（Decimal Odds）轉換為多種不同的賠率顯示格式。

---

## 📦 Installation

```bash
npm install ninesport-js-utils
# or
yarn add ninesport-js-utils
```

---

## `toPrice` 函數

`toPrice` 函數的主要功能是將一個代表賠率的字串（後端傳來的標準小數賠率Ratio）轉換為指定 `PriceType` 的賠率字串，以便在前端顯示。

### 函數簽名

```typescript
import { PriceType, toPrice } from "./src/price"; // 根據您的專案結構調整路徑

/**
 * @param valueString The ratio string to convert, 這個就是後端收到的Ratio(string).
 * @param priceType The type of price to convert to, 指定前端要顯示的PriceType.
 * @returns The formatted Price string.
 */
export function toPrice(valueString: string, priceType: PriceType): string;
```

### 參數說明

1.  `valueString` (string):
    *   這是輸入的賠率字串，**必須是標準的小數賠率格式** (例如："1.5", "2.0", "3.75")。
    *   此字串將被 `decimal.js` 函式庫解析為 Decimal 物件進行運算。

2.  `priceType` (PriceType):
    *   這是一個枚舉型別，用於指定要將輸入的 `valueString` 轉換成的目標賠率格式。

### `PriceType` 枚舉

`PriceType` 定義了支援的各種賠率格式：

```typescript
export enum PriceType {
    DECIMAL = 1,     // European odds (decimal format), 歐洲盤
    MONEY_LINE,      // American odds (moneyline format), 美金盤
    HK,              // Hong Kong odds, 香港盤
    MALAY,           // Malaysian odds, 馬來盤
    INDO,            // Indonesian odds, 印尼盤
    FRACTIONAL,      // UK/Fractional odds, 英式盤 (例如：1/2, 5/2)
}
```

您可以使用 `priceTypeToString(p: PriceType): string` 來獲取 `PriceType` 對應的顯示名稱：

```typescript
import { priceTypeToString, PriceType } from "./src/price";

console.log(priceTypeToString(PriceType.DECIMAL)); // "Decimal"
console.log(priceTypeToString(PriceType.MONEY_LINE)); // "Money Line"
// ...以此類推
```

## `toPrice` 使用範例

以下範例展示了如何使用 `toPrice` 函數將一個小數賠率 "1.01" 轉換為所有支援的賠率格式。此範例參考了 `tests/price.test.ts` 中的測試邏輯。

```typescript
import { PriceType, toPrice } from "./src/price"; // 根據您的專案結構調整路徑

const decimalOddsString = "1.01";

console.log(`原始小數賠率: ${decimalOddsString}\n`);

// 轉換為歐洲盤 (Decimal)
const decimalPrice = toPrice(decimalOddsString, PriceType.DECIMAL);
console.log(`歐洲盤 (Decimal): ${decimalPrice}`); // 預期輸出: "1.01"

// 轉換為香港盤 (HK)
const hkPrice = toPrice(decimalOddsString, PriceType.HK);
console.log(`香港盤 (HK): ${hkPrice}`); // 預期輸出: "0.01"

// 轉換為馬來盤 (Malay)
const malayPrice = toPrice(decimalOddsString, PriceType.MALAY);
console.log(`馬來盤 (Malay): ${malayPrice}`); // 預期輸出: "0.01"

// 轉換為印尼盤 (Indo)
const indoPrice = toPrice(decimalOddsString, PriceType.INDO);
console.log(`印尼盤 (Indo): ${indoPrice}`); // 預期輸出: "-100"

// 轉換為英式盤/分數盤 (Fractional)
const ukPrice = toPrice(decimalOddsString, PriceType.FRACTIONAL);
console.log(`英式盤 (Fractional): ${ukPrice}`); // 預期輸出: "1/100"

// 轉換為美金盤 (Money Line)
const usPrice = toPrice(decimalOddsString, PriceType.MONEY_LINE);
console.log(`美金盤 (Money Line): ${usPrice}`); // 預期輸出: "-10000"

console.log("\n--- 另一個範例：賠率為 2.5 ---");
const anotherDecimalOdds = "2.5";

const decimal_ex2 = toPrice(anotherDecimalOdds, PriceType.DECIMAL);     // "2.5"
const hk_ex2 = toPrice(anotherDecimalOdds, PriceType.HK);                 // "1.5"
const malay_ex2 = toPrice(anotherDecimalOdds, PriceType.MALAY);           // "-0.66666666666666666667" (近似值，實際輸出取決於 decimal.js 的精度)
const indo_ex2 = toPrice(anotherDecimalOdds, PriceType.INDO);             // "1.5"
const uk_ex2 = toPrice(anotherDecimalOdds, PriceType.FRACTIONAL);         // "150/100"
const us_ex2 = toPrice(anotherDecimalOdds, PriceType.MONEY_LINE);         // "+150"

console.log(`歐洲盤: ${decimal_ex2}, 香港盤: ${hk_ex2}, 馬來盤: ${malay_ex2}, 印尼盤: ${indo_ex2}, 英式盤: ${uk_ex2}, 美金盤: ${us_ex2}`);
```

## `toPrice` 錯誤處理

*   如果提供的 `valueString` 無法被解析為有效的數字 (例如傳入 "abc" 或空字串)，`toPrice` 函數會在控制台輸出一條錯誤訊息，並返回字串 `"Invalid Input"`。
*   在某些特定轉換中（例如 `PriceType.MONEY_LINE` 或 `PriceType.MALAY`），如果計算過程中出現除以零的情況（例如，當輸入的小數賠率為 "1.0" 時），函數會返回字串 `"NaN"`。

建議在使用此函數時，檢查返回結果是否為 `"Invalid Input"` 或 `"NaN"`，並根據應用程式的需求進行相應的處理。