/** @format */

import PageOne from 'Pages/PageOne'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateTable } from 'Store/StockGlassReducer/actions'
import {
  getValuesBids,
  getValuesAsks,
  getSymbol,
  getTableHeader,
} from 'Store/StockGlassReducer/selectors'

const PageOneContainer: React.FC = () => {
  const dispatch = useDispatch()
  const valuesBids = useSelector(getValuesBids)
  const valuesAsks = useSelector(getValuesAsks)
  const arrItemsTableHeader = useSelector(getTableHeader)
  const currentSymbol = useSelector(getSymbol)

  useEffect(
    () => dispatch(setUpdateTable(currentSymbol)),
    [currentSymbol, dispatch]
  )

  return (
    <PageOne
      valuesBids={valuesBids}
      valuesAsks={valuesAsks}
      currentSymbol={currentSymbol}
      arrItemsTableHeader={arrItemsTableHeader}
    />
  )
}

export default PageOneContainer
