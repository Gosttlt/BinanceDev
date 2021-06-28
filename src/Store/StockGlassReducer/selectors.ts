/** @format */

import { AppStateType } from 'Store/index'

import { createSelector } from 'reselect'

const getTotal = (arr: number[]): number[] => {
  ;[arr[2]] = [+arr[0] * +arr[1]]
  return [...arr]
}

const getBids = (state: AppStateType) =>
  state.StockGlassReducer.updatedValues.bids
const getAsks = (state: AppStateType) =>
  state.StockGlassReducer.updatedValues.asks
const getLastBids = (state: AppStateType) =>
  state.StockGlassReducer.lastUpdateValues.bids
const getLastAsks = (state: AppStateType) =>
  state.StockGlassReducer.lastUpdateValues.asks

export const getIsLoadingTable = (state: AppStateType) =>
  state.StockGlassReducer.isLoadingTable
export const getTableHeader = (state: AppStateType) =>
  state.StockGlassReducer.arrItemsTableHeader
export const getSymbol = (state: AppStateType) =>
  state.StockGlassReducer.currentSymbol
export const getSymbols = (state: AppStateType) =>
  state.StockGlassReducer.symbols

export const getValuesBids = createSelector(getBids, v =>
  v.map((r: number[]) => getTotal(r))
)
export const getValuesAsks = createSelector(getAsks, v =>
  v.map((r: number[]) => getTotal(r))
)
export const getLastUpdateBids = createSelector(getLastBids, v =>
  v.map((r: number[]) => getTotal(r))
)
export const getLastUpdateAsks = createSelector(getLastAsks, v =>
  v.map((r: number[]) => getTotal(r))
)
