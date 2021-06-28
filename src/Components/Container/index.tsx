/** @format */

import s from './s.module.css'

const Container: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>
}
export default Container
