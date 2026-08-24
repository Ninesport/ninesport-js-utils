import { BetItem, IBet, IFixture, IHostConfig, IMarket, MarketCardData } from "./types"

function transpose<T>(matrix: T[][]): T[][] {
    if (!matrix || matrix.length === 0 || !matrix[0]) return []
    const output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))
    return output
}


function transformBetNameAndSubName(bet: IBet, fixture: IFixture): {betName: string, subName: string} {
    const output = { betName: "", subName: "" }
    // bet.localeName: "1 & 大", "12 & 小", "X2 & 大", ...

    const s = bet.localeName.replace("And", "&").split("&").map(t => t.trim())
    if (s.length === 2) {
        const overOrUnder = s[1]
        output.betName = `${overOrUnder} ${bet.line || ""}`.trim()
        const teamNameOrDraw = s[0]
        const teams: string[] = []
        if (teamNameOrDraw.includes("1")) {
            teams.push(translateTeamName("1", fixture))
        }
        if (teamNameOrDraw.includes("2")) {
            teams.push(translateTeamName("2", fixture))
        }
        const draw = teamNameOrDraw.replace(/1|2/g, "").trim()
        if (draw) {
            teams.push(draw)
        }
        output.subName = teams.join(" / ")
    }

    return output
}

export function transformBetName(bet: IBet, fixture?: IFixture): string {
    if (!fixture) {
        return bet.localeName
    }
    switch (bet.viewType) {
    case 1:
        return translateTeamName(bet.localeName, fixture)
    case 2:
        return bet.localeName
    case 3:
        return `${translateTeamName(bet.localeName || "", fixture)} (${bet.line})`
    case 4:
        return `${bet.localeName} (${bet.line})`
    case 5:
        return `${bet.playerLocaleName} ${bet.localeName} ${bet.line || ""}`.trim()
    case 6:
    {
        const result = transformBetNameAndSubName(bet, fixture)
        return `${result.subName} ${result.betName}`
    }
        
    }

    return bet.localeName
}


export function translateTeamName(localeName: string, fixture: IFixture): string {
    switch (localeName) {
    case "1":
        return fixture.participants.find(p => p.position === 1)?.localeName || localeName
    case "2":
        return fixture.participants.find(p => p.position === 2)?.localeName || localeName
    default:
        return localeName
    }
}

export function transformMarket(markets: IMarket[], fixture: IFixture, hostConfig?: IHostConfig): MarketCardData[] {
    const calCanBet = (bet: IBet) => {
        if (!bet.canBet) return false
        if (hostConfig) {
            if (bet.isFromInplay && !hostConfig.canInplayBet) return false
            if (!bet.isFromInplay && !hostConfig.canPrematchBet) return false
        }
        return true
    }
    return markets.map(market => {
        const output: MarketCardData = {
            id: market.id,
            marketType: market.marketType,
            marketTypeLocaleName: market.marketTypeLocaleName,
            viewType: market.viewType,
            hasLine: !!market.mainLine || !!(market.bets.find(row => row.find(b => !!b?.line))),
            betsBlocks: [],
        }
        switch (market.viewType) {
        case 1:
            output.betsBlocks.push({
                // columnNames: market.betOptionLocaleNames?.map(name => translateTeamName(name || "", fixture)) || [],
                items: transpose(market.bets.map(row => {
                    return row.map(bet => {
                        if (!bet) {
                            return null
                        }
                        return {
                            id: bet.id,
                            bet: bet,
                            name: translateTeamName(bet.localeName, fixture),
                            isPriceHigher: bet.isPriceHigher,
                            canBet: calCanBet(bet),
                            odds: bet.actualPrice,
                        }
                    })
                })),
            })
            break
        case 2:
            output.betsBlocks.push({
                items: transpose(market.bets.map(row => {
                    return row.map(bet => {
                        if (!bet) {
                            return null
                        }
                        return {
                            id: bet.id,
                            bet: bet,
                            name: bet.localeName,
                            isPriceHigher: bet.isPriceHigher,
                            canBet: calCanBet(bet),
                            odds: bet.actualPrice,
                        }
                    })
                })),
            })
            break
        case 3:
            output.betsBlocks.push({
                columnNames: market.betOptionLocaleNames?.map(name => translateTeamName(name || "", fixture)) || [],
                items: market.bets.map(row => {
                    return row.map(bet => {
                        if (!bet) {
                            return null
                        }
                        return {
                            id: bet.id,
                            bet: bet,
                            name: bet.line || "",
                            isPriceHigher: bet.isPriceHigher,
                            canBet: calCanBet(bet),
                            odds: bet.actualPrice,
                            isMainLine: bet.isMainLine ?? undefined,
                        }
                    })
                }),
            })
            break
        case 4:
            // 4 跟 3差在不翻譯隊伍
            output.betsBlocks.push({
                columnNames: market.betOptionLocaleNames || [],
                items: market.bets.map(row => {
                    return row.map(bet => {
                        if (!bet) {
                            return null
                        }
                        return {
                            id: bet.id,
                            bet: bet,
                            name: bet.line || "",
                            isPriceHigher: bet.isPriceHigher,
                            canBet: calCanBet(bet),
                            odds: bet.actualPrice,
                            isMainLine: bet.isMainLine ?? undefined,
                        }
                    })
                }),
            })
            break
        case 5:
            market.bets.forEach(row => {
                // 一個row會是一個playerName
                const validBets = row.filter((b): b is IBet => !!b)
                if (validBets.length === 0) {
                    return
                }
                const firstBet = validBets[0]
                
                output.betsBlocks.push({
                    centerTopic: firstBet?.playerLocaleName ?? firstBet.localeName,
                    items: [row.map(b => {
                        if (!b) {
                            return null
                        }
                        return {
                            id: b.id,
                            bet: b,
                            name: `${b.localeName} ${b.line || ""}`.trim(),
                            isPriceHigher: b.isPriceHigher,
                            canBet: calCanBet(b),
                            odds: b.actualPrice,
                            isMainLine: b.isMainLine ?? undefined,
                        }
                    })],
                })
            })
            break
        case 6:
        {
            const defaultItems = market.bets.map(row => {
                return row.map(bet => {
                    if (!bet) {
                        return null
                    }
                    const item: BetItem = {
                        id: bet.id,
                        name: bet.localeName,
                        isPriceHigher: bet.isPriceHigher,
                        canBet: calCanBet(bet),
                        odds: bet.actualPrice,
                    // isMainLine: bet.isMainLine ?? undefined,
                    }
                    // bet.localeName: "1 & 大", "12 & 小", "X2 & 大", ...
                    const s = bet.localeName.replace("And", "&").split("&").map(t => t.trim())
                    if (s.length === 2) {
                        const overOrUnder = s[1]
                        item.name = `${overOrUnder} ${bet.line || ""}`.trim()
                        const teamNameOrDraw = s[0]
                        const teams: string[] = []
                        if (teamNameOrDraw.includes("1")) {
                            teams.push(translateTeamName("1", fixture))
                        }
                        if (teamNameOrDraw.includes("2")) {
                            teams.push(translateTeamName("2", fixture))
                        }
                        const draw = teamNameOrDraw.replace(/1|2/g, "").trim()
                        if (draw) {
                            teams.push(draw)
                        }
                        item.subName = teams.join(" / ")
                    }

                    return item
                })
            })

            // 把defaultItems[X][Y] 轉成 [2N][2], 如果為奇數，最後一個填null
            const items: (BetItem | null)[][] = []
            defaultItems.forEach(row => {
                for (let i = 0; i < row.length; i += 2) {
                    const col1 = row[i]
                    const col2 = i + 1 < row.length ? row[i + 1] : null
                    items.push([col1, col2])
                }
            })
            output.betsBlocks.push({
                columnNames: [],
                items: items,
            })
            break 
        }
        }

        return output
    })
}