/** @format */

import { useMemo } from 'react'
import { TableHeaderType } from 'Store/StockGlassReducer/types'
import s from './s.module.css'
import TableItem from './TableItem'

type PropsType = {
  items: number[] | TableHeaderType[]
}
const RowTeble: React.FC<PropsType> = ({ items }) => {
  const itemsTable = useMemo(
    () =>
      items.map((item, index) => (
        <TableItem name={item} key={index} index={index} />
      )),
    [items]
  )

  return <div className={s.rowTeble}>{itemsTable}</div>
}

export default RowTeble
