import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Burger.scss'

interface IBurgerProps {
	active: boolean
	setActive: (event: any) => void
}

export const Burger: FC<IBurgerProps> = ({ active, setActive }) => {
	return (
		<div
			className={active ? 'menu active-menu' : 'menu'}
			onClick={() => setActive(false)}
		>
			<div className='menu__content' onClick={(e) => e.stopPropagation()}>
				<div className='menu__header'>Админ</div>
				<ul className='menu-list'>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/admin'
						>
							Отчет
						</Link>
					</li>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/clients'
						>
							Клиенты
						</Link>
					</li>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/manufacturers'
						>
							Производители
						</Link>
					</li>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/suppliers'
						>
							Поставщики
						</Link>
					</li>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/finances'
						>
							Финансы
						</Link>
					</li>
					<li className='menu-item'>
						<Link
							onClick={() => setActive(false)}
							className='menu-link'
							to='/settings'
						>
							Настройки
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
