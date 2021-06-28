/** @format */

import { TableHeaderType } from 'Store/StockGlassReducer/types'
import s from './s.module.css'

type PropsType = { name: TableHeaderType | number; index: number }

const TableItem: React.FC<PropsType> = ({ name, index }) => {
  return (
    <div className={s.tableItem + ' ' + (index === 2 ? 'deactive' : '')}>
      {name}
    </div>
  )
}

export default TableItem
