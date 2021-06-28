/** @format */

import Preloader from 'Components/Preloader'
import { useMemo } from 'react'
import { SymbolType, TableHeaderType } from 'Store/StockGlassReducer/types'
import RowTeble from './RowTeble'
import s from './s.module.css'

type PropsType = {
  nameHead?: string
  arrItemsTableHeader: TableHeaderType[]
  tableValues: Array<number[]>
  currentSymbol: SymbolType
}

const TableBox: React.FC<PropsType> = ({
  nameHead,
  arrItemsTableHeader,
  tableValues,
  currentSymbol,
}) => {
  const arrValuesTable = useMemo(
    () => tableValues.map((arr, index) => <RowTeble items={arr} key={index} />),
    [tableValues]
  )
  return (
    <div className={s.tableBox}>
      <div className={s.tableHeaderFixedContainer}>
        <div className={s.tableHeaderFixed}>
          <div className={s.headingTable}>{nameHead + ' ' + currentSymbol}</div>
          <div className={s.headerTableBox}>
            <RowTeble items={arrItemsTableHeader} />
          </div>
        </div>
      </div>
      <div className={s.tableBody}>
        {!+tableValues[0][1] ? <Preloader /> : arrValuesTable}
      </div>
    </div>
  )
}
export default TableBox
