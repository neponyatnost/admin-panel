import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

export interface IHeaderLinksProps {
	path: string
	link: string
	key: number
}

export const HeaderLinks: FC = () => {
	const [links] = useState<IHeaderLinksProps[]>([
		{ path: '/', link: 'Главная', key: 1 }
	])

	return (
		<nav className='menu-header__links links-menu-header'>
			{links.map((link) => (
				<NavLink
					to={link.path}
					key={link.key}
					className='links-menu-header__link link-menu-header'
				>
					{link.link}
				</NavLink>
			))}
		</nav>
	)
}
