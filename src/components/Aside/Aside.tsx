import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Aside.scss'

export const Aside: FC = () => {
	return (
		<nav className='aside'>
			<NavLink className='aside__link' to='/admin'>
				Отчет
			</NavLink>
			<NavLink className='aside__link' to='/clients'>
				Клиенты
			</NavLink>
			<NavLink className='aside__link' to='/manufacturers'>
				Производители
			</NavLink>
			{/* <NavLink className='aside__link' to='/suppliers'>
        Поставщики
      </NavLink> */}
			<NavLink className='aside__link' to='/finances'>
				Финансы
			</NavLink>
			<NavLink className='aside__link' to='/settings'>
				Настройки
			</NavLink>
		</nav>
	)
}
