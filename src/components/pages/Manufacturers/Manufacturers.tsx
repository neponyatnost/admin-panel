import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { fetchManufacturersFromLocalStorage } from '../../../store/reducers/ActionCreators'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Loader } from '../../UI/Loader/Loader'
import { Title } from '../../UI/Title/Title'
import { Manufacturer } from './Manufacturer'
import { ManufacturerClientPage } from './ManufacturerClientPage'
import { ManufacturersStatsLayout } from './ManufacturersStatsLayout'

export const Manufacturers = () => {
	const { manufacturers: data } = useAppSelector(
		(state) => state.manufacturerReducer
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchManufacturersFromLocalStorage())
	}, [dispatch])

	const [manufacturerColumns] = useState({
		id: { path: 'id', name: 'ID' },
		dateRegistered: { path: 'dateRegistered', name: 'Дата регистрации' },
		name: { path: 'name', name: 'Организация' },
		completedOrders: {
			path: 'completedOrders',
			name: 'Кол-во выполненых заказов (шт.)'
		},
		completedOrdersAmount: {
			path: 'completedOrdersAmount',
			name: 'Общая сумма заказов (руб.)'
		},
		inFreeze: { path: 'inFreeze', name: 'В заморозке (руб.)' },
		link: {
			path: 'id',
			name: 'Ссылка',
			link: 'Подробнее'
		}
	})

	const params = useParams()
	const { manufacturerId } = params
	const { userId } = params

	if (userId) {
		return <ManufacturerClientPage userId={userId} />
	}

	if (manufacturerId) {
		return <Manufacturer manufacturerId={manufacturerId} />
	} else {
		return (
			<div className='statistics'>
				<Breadcrumbs />
				<Title classname='title-h2' title='Производители' />
				{data ? (
					<ManufacturersStatsLayout data={data} columns={manufacturerColumns} />
				) : (
					<Loader />
				)}
			</div>
		)
	}
}
