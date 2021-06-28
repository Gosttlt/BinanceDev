/** @format */

import { applyMiddleware, combineReducers, createStore, Action } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import StockGlassReducer from 'Store/StockGlassReducer/reducer'

const rootReducer = combineReducers({ StockGlassReducer })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
window.store = store

export default store
