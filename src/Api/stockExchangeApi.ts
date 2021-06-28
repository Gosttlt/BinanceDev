/** @format */

import { SymbolType, UpdateDataType } from 'Store/StockGlassReducer/types'

type DataType = string[] | number[]

const stockExchangeApi = {
  getData: async (symbol: SymbolType): Promise<UpdateDataType> => {
    const data = await fetch(
      `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`
    )
    const resp = await data.json()

    let bids = resp.bids
      .filter((b: DataType) => +b[1] !== 0)
      .map((b: DataType) => ([b[0], b[1]] = [+b[0], +b[1]]))
    let asks = resp.asks
      .filter((a: DataType) => +a[1] !== 0)
      .map((a: DataType) => ([a[0], a[1]] = [+a[0], +a[1]]))
    const arr = {
      bids: bids,
      asks: asks,
    }
    return arr
  },
}

export default stockExchangeApi
