/** @format */

import {
  SET_UPDATE,
  SET_LAST_UPDATE,
  SET_UPDATE_SYMBOL,
  SET_IS_LOADING_TABLE,
} from './constants'

export type UpdateDataType = { bids: Array<number[]>; asks: Array<number[]> }
export type TableHeaderType = 'Amount' | 'Price' | 'Total'
export type SetUpdateDataType = {
  type: typeof SET_UPDATE
  data: UpdateDataType
}
export type SetLastUpdateDataType = {
  type: typeof SET_LAST_UPDATE
  data: UpdateDataType
}
export type SymbolType = 'BTCUSDT' | 'BNBBTC' | 'ETHBTC'
export type LowerSymbolType = 'btcusdt' | 'bnbbtc' | 'ethbtc'
export type SetUpdateSymbolType = {
  type: typeof SET_UPDATE_SYMBOL
  symbol: SymbolType
}
export type SetIsLoadingTableType = {
  type: typeof SET_IS_LOADING_TABLE
  isLoading: boolean
}
export type StockGlassActionsType =
  | SetUpdateDataType
  | SetLastUpdateDataType
  | SetUpdateSymbolType
  | SetIsLoadingTableType
