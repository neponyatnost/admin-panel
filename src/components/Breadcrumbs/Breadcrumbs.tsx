import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import './Breadcrumbs.scss'

type Props = {
	match?: any
}

const routes = [
	{ path: '/clients/:userId', breadcrumb: 'Подробнее' },
	{ path: '/manufacturers/:userId', breadcrumb: 'Подробнее' },
	{ path: '/clients', breadcrumb: 'Клиенты' },
	{ path: '/settings', breadcrumb: 'Настройки' },
	{ path: '/admin', breadcrumb: 'Администратор' },
	{ path: '/manufacturers', breadcrumb: 'Производители' },
	{ path: '/manufacturer-client/:userId', breadcrumb: 'Подробнее' },
	{ path: '/manufacturer-client', breadcrumb: 'Клиенты производителя' },
	{ path: '/suppliers', breadcrumb: 'Поставщики' },
	{ path: '/finances', breadcrumb: 'Финансы' },
	{ path: '/', breadcrumb: 'Главная' },
	{ path: '/clients/:userId/edit', breadcrumb: 'Редактировать' }
]

export const Breadcrumbs: FC<Props> = () => {
	const breadcrumbs = useReactRouterBreadcrumbs(routes)

	return (
		<nav className='breadcrumbs'>
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<NavLink key={match.pathname} to={match.pathname}>
					{breadcrumb}
				</NavLink>
			))}
		</nav>
	)
}
