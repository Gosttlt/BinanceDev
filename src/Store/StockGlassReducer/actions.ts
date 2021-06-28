/** @format */

import {
  UpdateDataType,
  SetUpdateDataType,
  SetLastUpdateDataType,
  SymbolType,
  SetUpdateSymbolType,
  SetIsLoadingTableType,
  LowerSymbolType,
} from './types'

import stockExchangeApi from 'Api/stockExchangeApi'
import wsApi from 'Api/wsApi'
import { Dispatch } from 'redux'
import {
  SET_UPDATE,
  SET_UPDATE_SYMBOL,
  SET_LAST_UPDATE,
  SET_IS_LOADING_TABLE,
} from './constants'

const setUpdateTableAction = (data: UpdateDataType): SetUpdateDataType => ({
  type: SET_UPDATE,
  data,
})
const setLastUpdateAction = (data: UpdateDataType): SetLastUpdateDataType => ({
  type: SET_LAST_UPDATE,
  data,
})

export const setUpdateSymbol = (symbol: SymbolType): SetUpdateSymbolType => ({
  type: SET_UPDATE_SYMBOL,
  symbol,
})
export const setIsLoadingTable = (
  isLoading: boolean
): SetIsLoadingTableType => ({
  type: SET_IS_LOADING_TABLE,
  isLoading,
})

export const setUpdateSymbolAction =
  (symbol: SymbolType): any =>
  async (dispatch: Dispatch) => {
    wsApi.closeWs()
    dispatch(setUpdateSymbol(symbol))
  }

export const setUpdateTable =
  (symbol: SymbolType): any =>
  async (dispatch: Dispatch) => {
    const data = await stockExchangeApi.getData(symbol)
    dispatch(setUpdateTableAction(data))
    dispatch(setIsLoadingTable(false))
  }
export const setLastUpdate =
  (symbol: LowerSymbolType): any =>
  async (dispatch: Dispatch) => {
    const ws = await wsApi.createWs(symbol)
    const cb = (data: UpdateDataType): void => {
      dispatch(setLastUpdateAction(data))
    }
    //@ts-ignore
    wsApi.subscribe(ws, cb)
  }
