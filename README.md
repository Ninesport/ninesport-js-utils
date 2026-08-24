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

- 此函式用於根據選擇的投注數量（`foldSize`）獲取所有可用的複式串關選項。
生成的表格根據兩個變數 `maxFoldSize()` 和 `maxCombinationCount()` 決定。
- `maxFoldSize()`: 串關/複式投注裡用戶最大可選的投注數量(N Bets), 預設為`30`。
- `maxCombinationCount()`: 任何一個投注id的組合總數都不會超過`maxCombinationCount()`, 預設為`1000`。
- 其中上述兩個參數可以透過 `configureCombinationBets({MAX_FOLD_SIZE: 40, MAX_COMBINATION_COUNT: 2000})` 來修改


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
import { getCombinationBetReferenceTable, maxFoldSize } from 'ninesport-js-utils/combination-bet';

try {
  // 獲取當使用者選擇 3 個投注時的所有複式串關選項
  const tableFor3Folds = getCombinationBetReferenceTable(3);
  
  console.log(tableFor3Folds.foldSize); // 3
  console.log(tableFor3Folds.options);
  console.log(maxFoldSize()); // 30
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
calculateTotalStakeAndMaxPayout(inputs: CreateOrderParams[], maxBetOdds: string): StakeAndPayout
```

**參數**
- `inputs` (`CreateOrderParams[]`): 一個包含所有投注項目的陣列。
  - `perStakeAmount` (`string`): 每注的下注金額。
  - `odds` (`string[]`): 該投注項目中所有選項的賠率陣列。
  - `combinationBetOptionId` (`string`, 可選): 複式串關的選項 ID。如果此欄位留空，則視為單注或普通串關。此 ID 可從 `getCombinationBetReferenceTable` 的回傳值中取得。
- `maxBetOdds` (`string`): 用於判斷單一串關是否超過限制的賠率。

**回傳值**

一個 `StakeAndPayout` 物件，包含：
- `totalStake` (`Decimal`): 總下注金額。
- `maxPayout` (`Decimal`): 預期最高賠付金額。
- `equivalentOdds` (`Decimal`): 等效總賠率 (`maxPayout / totalStake`)。
- `isOverMaxOdds`: (`boolean`): 是否有任何單一串關的賠率超過了 `maxBetOdds`。

**範例**

```typescript
import { calculateTotalStakeAndMaxPayout } from 'ninesport-js-utils/combination-bet';

// 假設我們有一個單注和一個 2/3 的複式串關 (System 2/3)
const bets = [
    // 單注
    { perStakeAmount: "100", odds: ["1.8"] },
    // 複式串關: 2/3 (ID 為 '4')
    { perStakeAmount: "10", odds: ["1.5", "2.0", "3.0"], combinationBetOptionId: "4" }
];

const result = calculateTotalStakeAndMaxPayout(bets, "6.0");

console.log(`總投注: ${result.totalStake.toString()}`);     // 130 (單注100 + 複式(10*3注)=30)
console.log(`最高賠付: ${result.maxPayout.toString()}`);   // 315 (單注180 + 複式135)
console.log(`等效總賠率: ${result.equivalentOdds.toFixed(4)}`); // 2.4231
console.log(`單關賠率超出限制: ${result.isOverMaxOdds}`); // false, 最大恰為6.0, 沒有超過限制
```

---

### `calculateEquivalentOddsFromBetOption`

此函式用於計算給定一組賠率和一個可選的複式串關選項的「等效賠率」。它支援單注、普通串關和複式串關。

所謂「等效賠率」是指在所有組合中，每單位賭注的平均賠付率。

**簽名**
```typescript
calculateEquivalentOddsFromBetOption(odds: string[], maxBetOdds: string, combinationBetOption?: CombinationBetOption): EquivalentOddsFromBetOption
```

**參數**
- `odds` (`string[]`): 一個包含所有選項賠率的字串陣列。
- `maxBetOdds` (`string`): 用於判斷單一串關是否超過限制的賠率。
- `combinationBetOption` (`CombinationBetOption`, 可選): 複式串關的選項物件。如果此欄位留空，則會根據 `odds` 的長度自動判斷為單注（長度為 1）或普通串關（長度大於 1）。此物件可從 `getCombinationBetReferenceTable` 的回傳值中取得。

**回傳值**

一個 `EquivalentOddsFromBetOption` 物件，包含：
- `equivalentOdds` (`Decimal`): 等效賠率。
- `isOverMaxOdds`: (`boolean`): 是否有任何單一串關的賠率超過了 `maxBetOdds`。

**範例**

```typescript
import { 
  calculateEquivalentOddsFromBetOption, 
  getCombinationBetReferenceTable 
} from 'ninesport-js-utils/combination-bet';

// 範例 1: 普通串關 (3串1)
const result = calculateEquivalentOddsFromBetOption(["1.5", "2.0", "1.2"], "3.5");
console.log(result.equivalentOdds.toString()); // "3.6" (1.5 * 2.0 * 1.2)
console.log(result.isOverMaxOdds); // true

// 範例 2: 複式串關 (System 2/3)
// 首先，獲取 3 個投注的所有複式選項
const table = getCombinationBetReferenceTable(3);
// 從中找到 System 2/3 (Doubles) 的選項，其 combinationCount 為 3
const system2Of3Option = table.options.find(opt => opt.combinationCount === 3);

const result = calculateEquivalentOddsFromBetOption(["1.5", "2.0", "3.0"], "5.9", system2Of3Option);
// 計算方式: ((1.5 * 2.0) + (1.5 * 3.0) + (2.0 * 3.0)) / 3 = (3 + 4.5 + 6) / 3 = 13.5 / 3
console.log(result.equivalentOdds.toString()); // "4.5"
console.log(result.isOverMaxOdds); // true
```

---

### `calculateCombinationBetDetail`

此函式用於計算指定複式投注選項的所有子注單組合及其詳細資訊。當使用者想查看一個複式投注（例如 "System 2/4"）是由哪些具體的串關組合而成時，這個函式非常有用。它支援分頁，可以有效地處理大量組合的情況。

**簽名**
```typescript
calculateCombinationBetDetail(input: CalculateCombinationBetDetailInput): CombinationBetDetail
```

**參數** (`CalculateCombinationBetDetailInput`)
- `combinationBetOptionId` (`string`): 複式投注選項的 ID。此 ID 可從 `getCombinationBetReferenceTable` 的回傳值中取得。
- `payoutPrices` (`string[]`): 一個包含所有選項結算賠率的字串陣列。
- `page` (`number`): 指定要查詢的頁數，從 1 開始。
- `pageSize` (`number`, 可選): 每頁顯示的項目數量，預設為 10。

**回傳值**

一個 `CombinationBetDetail` 物件，包含：
- `pagination` (`Pagination`): 分頁資訊物件，包含總頁數、總項目數等。
- `items` (`CombinationBetItem[]`): 一個陣列，其中每個物件代表一個子注單組合。
  - `betIndices` (`number[]`): 組成此子注單的選項索引（從 1 開始）。
  - `settledOdds` (`Decimal`): 此子注單組合的結算賠率。
- `combinationCount` (`number`): 該複式投注的總組合數。
- `combinationBetOptionId` (`string`): 傳入的複式投注 ID。
- `foldSize` (`number`): 投注選項的總數。

**範例**

假設使用者選擇了 4 個投注項目，並想查看 "System 2/4" 的詳細組合。

```typescript
import { 
  getCombinationBetReferenceTable,
  calculateCombinationBetDetail 
} from 'ninesport-js-utils/combination-bet';

// 1. 定義賠率和分頁參數
const payoutPrices = ["1.5", "2.0", "2.5", "3.0"];
const foldSize = payoutPrices.length; // 4

// 2. 獲取 foldSize=4 的複式投注選項
const table = getCombinationBetReferenceTable(foldSize);
// 找到 "System 2/4"，其組合數為 C(4, 2) = 6
const system2Of4Option = table.options.find(opt => opt.combinationCount === 6);

if (system2Of4Option) {
  // 3. 計算第一頁的詳細組合 (每頁顯示 4 項)
  const detailPage1 = calculateCombinationBetDetail({
    combinationBetOptionId: system2Of4Option.id,
    payoutPrices: payoutPrices,
    page: 1,
    pageSize: 4,
  });

  console.log(detailPage1.pagination);
  // { page: 1, total: 6, pageSize: 4, pages: 2, hasNext: true, hasPrev: false }

  console.log(detailPage1.items);
  // [
  //   { betIndices: [1, 2], settledOdds: new Decimal("3") },    // 1.5 * 2.0
  //   { betIndices: [1, 3], settledOdds: new Decimal("3.75") }, // 1.5 * 2.5
  //   { betIndices: [1, 4], settledOdds: new Decimal("4.5") },  // 1.5 * 3.0
  //   { betIndices: [2, 3], settledOdds: new Decimal("5") }     // 2.0 * 2.5
  // ]
}
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

---

### `reduceEventSubscriptionsForSingleEvent`

此函式是 `reduceEventSubscriptions` 的單一賽事版本。它針對單一 `IEvent` 套用 `eventSubscriptions`，只處理 `fixtureId` 與 `data.fixture.id` 相符的訊息，並回傳更新後的賽事物件。適用於只需關注單場賽事即時更新的場景（例如賽事詳情頁）。

**簽名**
```typescript
reduceEventSubscriptionsForSingleEvent<F, M, L>(data: IEvent<F, M, L>, eventSubscriptions: IEventSubscription<F, M, L>[]): IEvent<F, M, L> | null
```

**參數**
- `data` (`IEvent`): 目前的單一賽事資料。
- `eventSubscriptions` (`IEventSubscription[]`): 一個包含多個更新訊息的陣列。支援的訊息類型 (`type`) 包括：
  - `addOrUpdateEvents`: 更新賽事的 fixture、markets、livescore。
  - `addOrUpdateMarkets`: 新增或更新盤口（依 `marketType` 排序）。
  - `updateLivescores`: 更新即時比分。
  - `deleteEvents`: 刪除賽事（函式將回傳 `null`）。
  - `deleteMarkets`: 刪除指定盤口。

**回傳值**

- 若賽事被刪除（收到 `deleteEvents` 類型），回傳 `null`。
- 若有任何更新，回傳一個新的 `IEvent` 物件（clone 後的副本），不會修改傳入的 `data`。
- 若沒有任何相符的更新訊息，直接回傳原始的 `data` 參考。

**範例**

```typescript
import { reduceEventSubscriptionsForSingleEvent } from 'ninesport-js-utils/events';

// 假設已有一個賽事資料
const currentEvent = {
  fixture: { id: 'fixture-1', isHot: true, startedAt: '2024-01-01T12:00:00Z', leagueId: 'league-1', leagueLocaleName: 'English Premier League', league: { id: 'league-1', weight: 100 } },
  markets: [{ id: 'market-1', marketType: 1, bets: [] }],
  livescore: { id: 'livescore-1' },
};

// 範例 1: 更新即時比分
const subscriptions = [
  { type: 'updateLivescores', fixtureId: 'fixture-1', livescore: { id: 'livescore-1-updated' } },
];
const updatedEvent = reduceEventSubscriptionsForSingleEvent(currentEvent, subscriptions);
console.log(updatedEvent?.livescore?.id); // "livescore-1-updated"

// 範例 2: 刪除賽事
const deleteSubscriptions = [
  { type: 'deleteEvents', fixtureId: 'fixture-1' },
];
const deletedEvent = reduceEventSubscriptionsForSingleEvent(currentEvent, deleteSubscriptions);
console.log(deletedEvent); // null

// 範例 3: 不相符的 fixtureId 不會影響結果
const otherSubscriptions = [
  { type: 'updateLivescores', fixtureId: 'fixture-999', livescore: { id: 'other' } },
];
const unchangedEvent = reduceEventSubscriptionsForSingleEvent(currentEvent, otherSubscriptions);
console.log(unchangedEvent === currentEvent); // true (回傳原始參考)
```

---

### `addOrUpdateSingleEventGroup`

此函式用於新增或更新單一聯賽分組資料（`IEventsWithLeagueGroup`）。如果該聯賽分組在原資料中不存在，則將其新增並依據第一個賽事的聯賽權重（`weight`）進行降序排序；如果已存在，則直接替換該聯賽分組資料。

**簽名**
```typescript
addOrUpdateSingleEventGroup<F, M, L>(
    data: IEventsWithLeagueGroup<F, M, L>[], 
    singleEventGroup: IEventsWithLeagueGroup<F, M, L>
): IEventsWithLeagueGroup<F, M, L>[]
```

**參數**
- `data` (`IEventsWithLeagueGroup[]`): 目前的賽事資料狀態陣列。
- `singleEventGroup` (`IEventsWithLeagueGroup`): 待新增或更新的單一聯賽分組資料。

**回傳值**

回傳一個新的 `IEventsWithLeagueGroup[]` 陣列，代表更新後的狀態。此函式會先對傳入的 `data` 進行 shallow copy，避免直接修改原陣列的引用。

**範例**

```typescript
import { addOrUpdateSingleEventGroup } from 'ninesport-js-utils/events-utils';

const initialData = [
  {
    leagueId: "league-2",
    leagueLocaleName: "Spanish La Liga",
    league: { id: "league-2", weight: 20 },
    eventsCount: 1,
    eventsHotCount: 0,
    hasData: true,
    events: [
      {
        fixture: { id: 'f2', isHot: false, leagueId: 'league-2', leagueLocaleName: 'Spanish La Liga', league: { id: 'league-2', weight: 20 } },
        markets: []
      }
    ]
  }
];

// 新增一個權重較高 (weight: 100) 的英超聯賽分組
const newGroup = {
  leagueId: "league-1",
  leagueLocaleName: "English Premier League",
  league: { id: "league-1", weight: 100 },
  eventsCount: 1,
  eventsHotCount: 1,
  hasData: true,
  events: [
    {
      fixture: { id: 'f1', isHot: true, leagueId: 'league-1', leagueLocaleName: 'English Premier League', league: { id: 'league-1', weight: 100 } },
      markets: []
    }
  ]
};

const result = addOrUpdateSingleEventGroup(initialData, newGroup);
// result 陣列長度為 2，且英超聯賽分組 (weight: 100) 會因為權重排序被排在最前面
console.log(result[0].leagueId); // "league-1"
console.log(result[1].leagueId); // "league-2"
```

---

### `translateTeamName`

此函式單純針對 `"1"` 與 `"2"` 提取出 `fixture` 對應的 `participants.localeName`（`position === 1` 為主隊/參賽者1，`position === 2` 為客隊/參賽者2）。若傳入的名稱非 `"1"` 或 `"2"`，或是找不到對應的參賽者，則原樣回傳 `localeName`。

**簽名**
```typescript
translateTeamName(localeName: string, fixture: IFixture): string
```

**參數**
- `localeName` (`string`): 待翻譯的名稱或代號（例如 `"1"`、`"2"` 或一般隊名/選項文字）。
- `fixture` (`IFixture`): 賽事資料物件，內含 `participants`（參賽者列表）。

**回傳值**

- `string`: 翻譯後的隊伍名稱。若為 `"1"` 則回傳 `position === 1` 的參賽者名稱；若為 `"2"` 則回傳 `position === 2` 的參賽者名稱；其餘情況回傳原始 `localeName`。

**範例**

```typescript
import { translateTeamName } from 'ninesport-js-utils/transform';

const fixture = {
  id: 'f1',
  isHot: true,
  leagueLocaleName: '英格蘭超級聯賽',
  league: { id: 'l1', weight: 100 },
  participants: [
    { id: 'p1', localeName: '兵工廠', position: 1 },
    { id: 'p2', localeName: '切爾西', position: 2 }
  ]
};

console.log(translateTeamName("1", fixture)); // "兵工廠"
console.log(translateTeamName("2", fixture)); // "切爾西"
console.log(translateTeamName("和局", fixture)); // "和局"
```

---

### `transformBetName`

當用戶對該 bet 下注時，會需要在 Bets Slip 顯示該 bet 的內容，這個內容的顯示同樣會由 `viewType` 決定要如何提取 `localeName`、`line`、`playerLocaleName` 來組成字串。若未傳入 `fixture`，則直接回傳 `bet.localeName`。

**簽名**
```typescript
transformBetName(bet: IBet, fixture?: IFixture): string
```

**參數**
- `bet` (`IBet`): 投注項目物件，包含 `viewType`、`localeName`、`line`、`playerLocaleName` 等資訊。
- `fixture` (`IFixture`, 可選): 賽事資料物件。若未提供，則直接回傳 `bet.localeName`。

**格式轉換規則 (`viewType`)**
- `1`: 使用 `translateTeamName` 將 `"1"` / `"2"` 翻譯為隊伍名稱。
- `2`: 直接回傳 `bet.localeName`。
- `3`: 隊伍名稱加上盤口線，格式為 `${translateTeamName(bet.localeName)} (${bet.line})`。
- `4`: 原始名稱加上盤口線，格式為 `${bet.localeName} (${bet.line})`。
- `5`: 球員盤口，格式為 `${bet.playerLocaleName} ${bet.localeName} ${bet.line}`。
- `6`: 複合盤口（如勝平負 & 大小球），拆解並組合成 `${subName} ${betName}`（例如 `"兵工廠 大 2.5"`）。
- 其他: 回傳 `bet.localeName`。

**回傳值**

- `string`: 處理後用於 Bets Slip 顯示的投注項目名稱字串。

**範例**

```typescript
import { transformBetName } from 'ninesport-js-utils/transform';

const fixture = {
  id: 'f1',
  isHot: true,
  leagueLocaleName: '英格蘭超級聯賽',
  league: { id: 'l1', weight: 100 },
  participants: [
    { id: 'p1', localeName: '兵工廠', position: 1 },
    { id: 'p2', localeName: '切爾西', position: 2 }
  ]
};

// viewType 1: 隊伍名稱翻譯
const bet1 = { id: 'b1', name: '1', localeName: '1', viewType: 1, actualPrice: '1.95', canBet: true, isFromInplay: false };
console.log(transformBetName(bet1, fixture)); // "兵工廠"

// viewType 3: 隊伍名稱 + 盤口線
const bet3 = { id: 'b3', name: '1', localeName: '1', viewType: 3, line: '-0.5', actualPrice: '1.90', canBet: true, isFromInplay: false };
console.log(transformBetName(bet3, fixture)); // "兵工廠 (-0.5)"

// viewType 5: 球員盤口
const bet5 = { id: 'b5', name: 'Goal', localeName: '進球', playerLocaleName: '薩卡', line: '>=1', viewType: 5, actualPrice: '2.50', canBet: true, isFromInplay: false };
console.log(transformBetName(bet5, fixture)); // "薩卡 進球 >=1"
```

---

### `transformMarket`

此函式用於把後端傳來的盤口資料（`IMarket[]`）整理成 Figma 設計檔上的顯示格式（`MarketCardData[]`），以便 UI 元件進行呈現。同時會結合 `hostConfig`（`canInplayBet` / `canPrematchBet`）與盤口滾球屬性計算各個投注選項是否可以下注（`canBet`）。

**簽名**
```typescript
transformMarket(markets: IMarket[], fixture: IFixture, hostConfig?: IHostConfig): MarketCardData[]
```

**參數**
- `markets` (`IMarket[]`): 原始盤口資料陣列。
- `fixture` (`IFixture`): 賽事資料物件，用於隊伍名稱翻譯。
- `hostConfig` (`IHostConfig`, 可選): 平台設定物件，用於控制滾球（`canInplayBet`）與早盤（`canPrematchBet`）的下注權限。

**回傳值**

- `MarketCardData[]`: 轉換後的盤口卡片資料陣列，每個物件包含：
  - `id` (`string`): 盤口 ID。
  - `marketType` (`number`): 盤口類型代碼。
  - `marketTypeLocaleName` (`string`): 盤口類型本地化名稱。
  - `viewType` (`number`): 顯示版面類型（1 ~ 6）。
  - `hasLine` (`boolean`): 該盤口是否包含盤口線（`line`）。
  - `betsBlocks` (`BetsBlock[]`): 投注按鈕區塊資料，包含 `items`（二維按鈕陣列）、`columnNames`（欄位標題）或 `centerTopic`（置中主題，如球員名稱）。

**範例**

```typescript
import { transformMarket } from 'ninesport-js-utils/transform';

const fixture = {
  id: 'f1',
  isHot: true,
  leagueLocaleName: '英格蘭超級聯賽',
  league: { id: 'l1', weight: 100 },
  participants: [
    { id: 'p1', localeName: '兵工廠', position: 1 },
    { id: 'p2', localeName: '切爾西', position: 2 }
  ]
};

const markets = [
  {
    id: 'm1',
    fixtureId: 'f1',
    viewType: 1,
    marketType: 1,
    marketTypeLocaleName: '全場獨贏',
    bets: [
      [
        { id: 'b1', name: '1', localeName: '1', viewType: 1, actualPrice: '1.95', canBet: true, isFromInplay: false, isPriceHigher: null },
        { id: 'b2', name: 'X', localeName: '和局', viewType: 1, actualPrice: '3.40', canBet: true, isFromInplay: false, isPriceHigher: null },
        { id: 'b3', name: '2', localeName: '2', viewType: 1, actualPrice: '3.80', canBet: true, isFromInplay: false, isPriceHigher: null }
      ]
    ]
  }
];

const hostConfig = {
  canInplayBet: true,
  canPrematchBet: true
};

const cardDataList = transformMarket(markets, fixture, hostConfig);
console.log(cardDataList[0].betsBlocks[0].items);
// [
//   [
//     { id: 'b1', name: '兵工廠', odds: '1.95', canBet: true, ... },
//     { id: 'b2', name: '和局', odds: '3.40', canBet: true, ... },
//     { id: 'b3', name: '切爾西', odds: '3.80', canBet: true, ... }
//   ]
// ]
```

---

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
