/** @format */
import { TableHeaderType, SymbolType, StockGlassActionsType } from './types'
import {
  SET_UPDATE,
  SET_UPDATE_SYMBOL,
  SET_LAST_UPDATE,
  SET_IS_LOADING_TABLE,
} from './constants'

type UpdateValuesType = {
  bids: Array<number[]>
  asks: Array<number[]>
}

const initialState = {
  updatedValues: {
    bids: [[0, 0]],
    asks: [[0, 0]],
  } as UpdateValuesType,
  currentSymbol: 'BTCUSDT' as SymbolType,
  symbols: ['BTCUSDT', 'BNBBTC', 'ETHBTC'] as SymbolType[],
  lastUpdateValues: {
    bids: [[0, 0]],
    asks: [[0, 0]],
  } as UpdateValuesType,
  isLoadingTable: true as boolean,
  arrItemsTableHeader: ['Amount', 'Price', 'Total'] as TableHeaderType[],
}

type InitialStateType = typeof initialState

const StockGlassReducer = (
  state = initialState,
  action: StockGlassActionsType
): InitialStateType => {
  switch (action.type) {
    case SET_UPDATE:
      return {
        ...state,
        updatedValues: { ...action.data },
      }
    case SET_LAST_UPDATE:
      return {
        ...state,
        lastUpdateValues: { ...action.data },
      }
    case SET_IS_LOADING_TABLE:
      return {
        ...state,
        isLoadingTable: action.isLoading,
      }

    case SET_UPDATE_SYMBOL:
      let emptyObj = {
        bids: [[0, 0]],
        asks: [[0, 0]],
      }
      return {
        ...state,
        currentSymbol: action.symbol,
        lastUpdateValues: emptyObj,
        updatedValues: emptyObj,
      }

    default:
      return state
  }
}

export default StockGlassReducer
