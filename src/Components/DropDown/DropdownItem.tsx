/** @format */

import { SymbolType } from 'Store/StockGlassReducer/types'

type PropsType = {
  name: SymbolType
  setSymbol: any
}

const DropdownItem: React.FC<PropsType> = ({ name, setSymbol }) => {
  return (
    <li className='dropdown-item btn' onClick={() => setSymbol(name)}>
      {name}
    </li>
  )
}

export default DropdownItem
