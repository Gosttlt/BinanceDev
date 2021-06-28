/** @format */

import s from './s.module.css'
import Container from 'Components/Container'
import DropDown from 'Components/DropDown'
import TableBox from 'Components/Tebles'
import { SymbolType, TableHeaderType } from 'Store/StockGlassReducer/types'

type PropsType = {
  currentSymbol: SymbolType
  symbols: SymbolType[]
  setUpdateSymbol: any
  valuesBids: Array<number[]>
  valuesAsks: Array<number[]>
  arrItemsTableHeader: TableHeaderType[]
}

const PageTwo: React.FC<PropsType> = ({
  currentSymbol,
  symbols,
  setUpdateSymbol,
  valuesBids,
  valuesAsks,
  arrItemsTableHeader,
}) => {
  return (
    <div className={s.pageBox}>
      <Container>
        <DropDown
          currentSymbol={currentSymbol}
          symbols={symbols}
          setUpdateSymbol={setUpdateSymbol}
        />
        <div className={s.page_two__table_box}>
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
      </Container>
    </div>
  )
}
export default PageTwo
