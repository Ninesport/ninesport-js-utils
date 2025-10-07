# Ninesport JS Utils

Ninesport JS Utils 是一個提供體育博彩相關計算和資料處理功能的工具庫。

## 安裝

```bash
npm install ninesport-js-utils decimal.js
# or
yarn add ninesport-js-utils decimal.js
```

由於此套件內部使用 `decimal.js` 進行高精度計算，因此您需要在您的專案中將其列為 `peerDependency`。

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