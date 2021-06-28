/** @format */

import { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { SymbolType } from 'Store/StockGlassReducer/types'
import DropdownItem from './DropdownItem'

type PropsType = {
  currentSymbol: SymbolType
  symbols: SymbolType[]
  setUpdateSymbol: any
}

const DropDown: React.FC<PropsType> = ({
  currentSymbol,
  symbols,
  setUpdateSymbol,
}) => {
  const dispatch = useDispatch()
  const [toggleButton, setToggleButton] = useState(false)

  const setSymbol = useCallback(
    name => {
      setToggleButton(false)
      dispatch(setUpdateSymbol(name))
    },
    [dispatch, setUpdateSymbol]
  )

  const symbolsArr = useMemo(
    () =>
      symbols
        .filter(s => s !== currentSymbol)
        .map(s => {
          return <DropdownItem name={s} key={s} setSymbol={setSymbol} />
        }),
    [symbols, setSymbol, currentSymbol]
  )

  return (
    <div className='position-relative'>
      <button
        onClick={() => setToggleButton(!toggleButton)}
        className='btn btn-primary dropdown-toggle '
      >
        {currentSymbol}
      </button>
      <ul className={'dropdown-menu ' + (toggleButton ? 'd-block' : 'd-none')}>
        {symbolsArr}
      </ul>
    </div>
  )
}

export default DropDown
