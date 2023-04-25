import { FC, useEffect, useState } from 'react'
import API from '../../../api'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IManufacturerClients } from '../../../models/IManufacturer'
import { fetchManufacturerClientOrdersFromLocalStorage } from '../../../store/reducers/ActionCreators'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { InfoItem } from '../../UI/InfoItem/InfoItem'
import { Loader } from '../../UI/Loader/Loader'
import { Title } from '../../UI/Title/Title'
import { TotalAmount } from '../../UI/TotalAmount/TotalAmount'
import { ClientsTable } from '../Clients/ClientsTable'

interface IManufacturerClientPageProps {
	userId: string
}

export const ManufacturerClientPage: FC<IManufacturerClientPageProps> = ({
	userId
}) => {
	const [user, setUser] = useState<IManufacturerClients>()

	const {
		manufacturerClientOrders: orders,
		isLoading,
		error
	} = useAppSelector((state) => state.manufacturerClientOrdersReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchManufacturerClientOrdersFromLocalStorage())
	}, [dispatch])

	const orderPrices = orders.map((order) => {
		let x = 0
		x += order.price
		return x
	})

	const pricesSum = orderPrices.reduce((first, second) => first + second, 0)

	useEffect(() => {
		if (userId) {
			API.manufacturers.getClientById(userId).then((data: any) => {
				setUser(data)
			})
		}
	}, [userId])

	const [ordersColumns] = useState({
		id: { path: 'id', name: 'ID' },
		photo: { path: 'photo', name: 'Фото' },
		vendorCode: { path: 'vendorCode', name: 'Артикул' },
		type: { path: 'type', name: 'Тип' },
		name: { path: 'name', name: 'Наименование' },
		inStock: { path: 'inStock', name: 'Наличие' },
		price: { path: 'price', name: 'Стоимость' }
	})

	return (
		<div className='statistics'>
			<Breadcrumbs />
			<Title classname='title-h2' title='Подробнее' />
			{user ? (
				<>
					<div className='statistics__wrapper'>
						<div className='info'>
							<Title classname='title-h3' title='Информация о клиенте' />
							<InfoItem label='ID' text={user.id} />
							<InfoItem label='Имя' text={user.clientName} />
							<InfoItem label='Дата заказа' text={user.orderDate} />
							<InfoItem label='Крайний срок выполнения' text={user.endDate} />
							<InfoItem
								label='Общая стоимость (руб.)'
								text={user.totalAmount}
							/>
							<InfoItem label='Оплачено (руб.)' text={user.paidAmount} />
						</div>
					</div>
					<div className='statistics__wrapper'>
						{isLoading && <Loader />}
						{error && <h1>Произошла ошибка при загрузке заказов</h1>}
						<TotalAmount totalAmount={pricesSum} />
						<ClientsTable
							columns={ordersColumns}
							data={orders}
							title='Список услуг'
						/>
					</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}
