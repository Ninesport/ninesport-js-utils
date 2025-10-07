# Ninesport JS Utils

Ninesport JS Utils 是一個提供體育博彩相關計算和資料處理功能的工具庫。

## 安裝

```bash
npm install ninesport-js-utils decimal.js
# or
yarn add ninesport-js-utils decimal.js
```

由於此套件內部使用 `decimal.js` 進行高精度計算，因此您需要在您的專案中將其列為 `peerDependency`。

### TypeScript 使用須知

本套件採用了現代的 `package.json` `exports` 欄位，以支援更優化的模組解析 (例如 `import ... from 'ninesport-js-utils/price'`)。

為了讓 TypeScript 能夠正確解析這些路徑的型別，請確保您專案的 `tsconfig.json` 中，`compilerOptions` 的 `moduleResolution` 設定為 `'bundler'`。

**範例 `tsconfig.json` 設定:**
```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler"
  }
}
```

## API 文件

### `getCombinationBetReferenceTable`

此函式用於根據選擇的投注數量（`foldSize`）獲取所有可用的複式串關選項。

**簽名**
```typescript
getCombinationBetReferenceTable(foldSize: number): CombinationBetReferenceTable
```

**參數**
- `foldSize` (`number`): 使用者在投注單中選擇的投注項目總數。例如，如果使用者選擇了 4 個不同的投注，`foldSize` 就是 4。

**回傳值**

一個 `CombinationBetReferenceTable` 物件，其中包含了該 `foldSize` 所有可能的複式串關組合。如果找不到對應的表格，將會拋出錯誤。

**範例**

```typescript
import { getCombinationBetReferenceTable } from 'ninesport-js-utils/combination-bet';

try {
  // 獲取當使用者選擇 3 個投注時的所有複式串關選項
  const tableFor3Folds = getCombinationBetReferenceTable(3);
  
  console.log(tableFor3Folds.foldSize); // 3
  console.log(tableFor3Folds.options); 
  // [
  //   { id: '3', foldSize: 3, combinationCount: 1, parameters: [...] }, // 3串1 (Treble)
  //   { id: '4', foldSize: 3, combinationCount: 3, parameters: [...] }, // 2串1 (Doubles)
  //   ...
  // ]

} catch (error) {
  console.error(error.message); // e.g., "CombinationBetReferenceTable for foldSize 31 not found"
}
```

---

### `calculateTotalStakeAndMaxPayout`

此函式用於計算投注單中所有投注項目的總下注金額和預期最高賠付。它支援單注、普通串關和複式串關。

**簽名**
```typescript
calculateTotalStakeAndMaxPayout(inputs: CreateOrderParams[]): StakeAndPayout
```

**參數**
- `inputs` (`CreateOrderParams[]`): 一個包含所有投注項目的陣列。
  - `perStakeAmount` (`string`): 每注的下注金額。
  - `odds` (`string[]`): 該投注項目中所有選項的賠率陣列。
  - `combinationBetOptionId` (`string`, 可選): 複式串關的選項 ID。如果此欄位留空，則視為單注或普通串關。此 ID 可從 `getCombinationBetReferenceTable` 的回傳值中取得。

**回傳值**

一個 `StakeAndPayout` 物件，包含：
- `totalStake` (`Decimal`): 總下注金額。
- `maxPayout` (`Decimal`): 預期最高賠付金額。
- `totalOdds` (`Decimal`): 等效總賠率 (`maxPayout / totalStake`)。

**範例**

```typescript
import { calculateTotalStakeAndMaxPayout } from 'ninesport-js-utils/combination-bet';

// 假設我們有一個單注和一個 2/3 的複式串關
const bets = [
    // 單注
    { perStakeAmount: "100", odds: ["1.8"] },
    // 複式串關: 2/3 (ID 為 '4')
    { perStakeAmount: "10", odds: ["1.5", "2.0", "3.0"], combinationBetOptionId: "4" }
];

const result = calculateTotalStakeAndMaxPayout(bets);

console.log(`總投注: ${result.totalStake.toString()}`);     // 130 (單注100 + 複式(10*3注)=30)
console.log(`最高賠付: ${result.maxPayout.toString()}`);   // 315 (單注180 + 複式135)
console.log(`等效總賠率: ${result.totalOdds.toFixed(4)}`); // 2.4231
```

---

### `reduceEventSubscriptions`

此函式是一個 Reducer，專門用於處理來自 WebSocket 的即時賽事更新。它接收目前的賽事資料狀態和一系列的更新訊息，並回傳一個新的、已更新的狀態，適用於 React、Vue 等前端框架的狀態管理。

**簽名**
```typescript
reduceEventSubscriptions<F, M, L>(data: IEventsWithLeagueGroup<F, M, L>[], eventSubscriptions: IEventSubscription<F, M, L>[]): IEventsWithLeagueGroup<F, M, L>[]
```

**參數**
- `data` (`IEventsWithLeagueGroup[]`): 目前的賽事資料狀態，按聯賽分組。
- `eventSubscriptions` (`IEventSubscription[]`): 一個包含多個更新訊息的陣列。支援的訊息類型 (`type`) 包括：
  - `addOrUpdateEvents`: 新增或更新賽事。
  - `addOrUpdateMarkets`: 新增或更新盤口。
  - `updateLivescores`: 更新即時比分。
  - `deleteEvents`: 刪除賽事。
  - `deleteMarkets`: 刪除盤口。

**回傳值**

一個新的 `IEventsWithLeagueGroup[]` 陣列，代表已應用所有更新的最終狀態。此函式為 immutable，不會修改傳入的 `data` 參數。



## `toPrice` 函數

`toPrice` 函數的主要功能是將一個代表賠率的字串（後端傳來的標準小數賠率Ratio）轉換為指定 `PriceType` 的賠率字串，以便在前端顯示。

### 函數簽名

```typescript
import { PriceType, toPrice } from "ninesport-js-utils/price";

/**
 * @param valueString The ratio string to convert, 這個就是後端收到的Ratio(string).
 * @param priceType The type of price to convert to, 指定前端要顯示的PriceType.
 * @returns The formatted Price string.
 */
function toPrice(valueString: string, priceType: PriceType): string;
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
import { priceTypeToString, PriceType } from "ninesport-js-utils/price";

console.log(priceTypeToString(PriceType.DECIMAL)); // "Decimal"
console.log(priceTypeToString(PriceType.MONEY_LINE)); // "Money Line"
// ...以此類推
```

## `toPrice` 使用範例

以下範例展示了如何使用 `toPrice` 函數將一個小數賠率 "1.01" 轉換為所有支援的賠率格式。此範例參考了 `tests/price.test.ts` 中的測試邏輯。

```typescript
import { PriceType, toPrice } from "ninesport-js-utils/price"; // 根據您的專案結構調整路徑

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
