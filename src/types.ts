
export interface ILeague {
    id: string
    weight: number
}

export interface IFixtureParticipant {
    id: string;
    localeName: string;
    position: number;
}

export interface IFixture {
    id: string
    isHot: boolean
    startedAt?: string | Date | null
    leagueLocaleName: string
    league: ILeague
    participants: IFixtureParticipant[];
}

export interface IBet {
    id: string;
    localeName: string;
    viewType: number;
    playerLocaleName?: string | null;
    line?: string | null;
    isMainLine?: boolean | null;
    isPriceHigher?: boolean | null;
    actualPrice: string;
    canBet: boolean;
    // 此欄位暫時不會用來運算，但是預留給未來使用
    participantLocaleName?: string | null;
    isFromInplay: boolean;
}

export interface IMarket {
    id: string;
    viewType: number;
    mainLine?: string | null;
    marketType: number;
    marketTypeLocaleName: string;
    betOptionLocaleNames?: string[] | null;
    bets: (IBet | null | undefined)[][];
}

export interface ILivescore {
    id: string
}

export interface IEvent<F extends IFixture, M extends IMarket, L extends ILivescore> {
    fixture: F
    markets: M[]
    livescore?: L
}

export interface IHostConfig {
    canInplayBet: boolean
    canPrematchBet: boolean
}

export type BetItem = {
    // 該bet的ID (UUID)
    id: string
    // 該bet的顯示名稱
    name: string
    // 因應viewType 6的顯示方式，在name上面需要再多一行subName
    subName?: string
    // 該bet的賠率
    odds: string
    // 價格是否為上升, false為價格下降, null代表不升不降
    isPriceHigher?: boolean | null
    // 如果是有line的市場，會標注這個Bet是否為主線
    isMainLine?: boolean
    // 該bet是否能夠下注
    canBet: boolean
}

export type BetsBlock = {
    // 跟columnNames類似，差別在於centerTopic只會有一個值，顯示的位置跟columnNames一樣，但他是置中
    centerTopic?: string
    // 該BetsBlock的上面的column名稱，例如: "Over", "Under", 長度一定會跟betCards的長度一致，沒有就代表不需要顯示column
    columnNames?: string[]
    // 2D陣列，[ row Index ][ column Index ]
    items: (BetItem | null)[][]
}

export type MarketCardData = {
    id: string
    marketType: number
    // 市場類型翻譯
    marketTypeLocaleName: string
    viewType: number
    // 裡面的bet是否有line (例如: 3.0, 2.5)
    hasLine: boolean
    // 一個market裡面可能會有複數個BetsBlock, 這是為了因應"viewType === 5"的視覺呈現，大部分時候都只會有一個
    betsBlocks: BetsBlock[]
}
