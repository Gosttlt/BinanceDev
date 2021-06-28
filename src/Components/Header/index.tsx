/** @format */

import Container from '../Container'
import s from './s.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <NavLink exact className={s.link} activeClassName={s.active} to='/'>
          Page-1
        </NavLink>
        <NavLink
          exact
          className={s.link}
          activeClassName={s.active}
          to='/pagetwo'
        >
          Page-2
        </NavLink>
      </Container>
    </header>
  )
}
export default Header
