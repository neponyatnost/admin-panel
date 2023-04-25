import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchUsersFromLocalStorage } from '../../../store/reducers/ActionCreators'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Loader } from '../../UI/Loader/Loader'
import { Title } from '../../UI/Title/Title'
import { Client } from './Client'
import { ClientsStatsLayout } from './ClientsStatsLayout'
import { EditClientPage } from './EditClientPage'
import './Statistics.scss'

export const Clients = () => {
	const { users: data } = useAppSelector((state) => state.userReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUsersFromLocalStorage())
	}, [dispatch])

	const [userColumns] = useState({
		id: { path: 'id', name: 'ID' },
		date: { path: 'dateRegistered', name: 'Дата регистрации' },
		clientName: { path: 'name', name: 'Имя клиента' },
		orders: { path: 'ordersNumber', name: 'Кол-во заказов (шт.)' },
		amount: { path: 'ordersAmount', name: 'Общая сумма (руб.)' },
		freeze: { path: 'inFreeze', name: 'В заморозке (руб.)' },
		link: {
			path: 'id',
			name: 'Ссылка',
			link: 'Подробнее'
		}
	})
	const [userOrdersColumns] = useState({
		number: { path: 'id', name: '№' },
		date: { path: 'date', name: 'Дата' },
		name: { path: 'name', name: 'Наименование' },
		count: { path: 'count', name: 'Кол-во (шт.)' },
		status: { path: 'status', name: 'Статус' },
		price: { path: 'price', name: 'Стоимость (руб.)' },
		confirmed: { path: 'confirmed', name: 'Подтверждение' }
	})

	const params = useParams()
	const { clientId, edit }: any = params

	return (
		<>
			{clientId ? (
				edit ? (
					<EditClientPage />
				) : (
					<Client clientId={clientId} userOrdersColumns={userOrdersColumns} />
				)
			) : (
				<div className='statistics'>
					<Breadcrumbs />
					<Title title='Клиенты' classname='title-h2' />
					{data ? (
						<ClientsStatsLayout columns={userColumns} data={data} />
					) : (
						<Loader />
					)}
				</div>
			)}
		</>
	)
}
