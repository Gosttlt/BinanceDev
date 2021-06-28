/** @format */

import { SymbolType, TableHeaderType } from 'Store/StockGlassReducer/types'
import TableBox from '../../Components/Tebles'
import s from './s.module.css'

type PropsType = {
  valuesBids: Array<number[]>
  valuesAsks: Array<number[]>
  currentSymbol: SymbolType
  arrItemsTableHeader: TableHeaderType[]
}

const PageOne: React.FC<PropsType> = ({
  valuesBids,
  valuesAsks,
  currentSymbol,
  arrItemsTableHeader,
}) => {
  return (
    <div className={s.pageBox}>
      <TableBox
        nameHead='Bid'
        currentSymbol={currentSymbol}
        arrItemsTableHeader={arrItemsTableHeader}
        tableValues={valuesBids}
      />
      <TableBox
        nameHead='Ask'
        currentSymbol={currentSymbol}
        arrItemsTableHeader={arrItemsTableHeader}
        tableValues={valuesAsks}
      />
    </div>
  )
}

export default PageOne
