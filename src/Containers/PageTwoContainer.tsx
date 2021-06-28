/** @format */

import wsApi from 'Api/wsApi'
import PageTwo from 'Pages/PageTwo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setLastUpdate,
  setUpdateSymbolAction,
} from 'Store/StockGlassReducer/actions'
import {
  getLastUpdateBids,
  getLastUpdateAsks,
  getSymbol,
  getSymbols,
  getTableHeader,
} from 'Store/StockGlassReducer/selectors'
import { LowerSymbolType } from 'Store/StockGlassReducer/types'

const PageTwoContainer = () => {
  const dispatch = useDispatch()

  const currentSymbol = useSelector(getSymbol)
  const symbols = useSelector(getSymbols)
  const valuesBids = useSelector(getLastUpdateBids)
  const valuesAsks = useSelector(getLastUpdateAsks)
  const arrItemsTableHeader = useSelector(getTableHeader)

  useEffect(() => {
    const currentSymbolLower = currentSymbol.toLowerCase() as LowerSymbolType

    dispatch(setLastUpdate(currentSymbolLower))
  }, [dispatch, currentSymbol])

  //@ts-ignore
  useEffect(() => () => wsApi.closeWs(), [])

  return (
    <PageTwo
      arrItemsTableHeader={arrItemsTableHeader}
      currentSymbol={currentSymbol}
      symbols={symbols}
      setUpdateSymbol={setUpdateSymbolAction}
      valuesBids={valuesBids}
      valuesAsks={valuesAsks}
    />
  )
}

export default PageTwoContainer
