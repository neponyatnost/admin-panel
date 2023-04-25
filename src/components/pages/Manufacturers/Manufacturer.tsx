import { FC, useEffect, useState } from 'react'
import API from '../../../api'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IManufacturer } from '../../../models/IManufacturer'
import {
	fetchManufacturerClientsFromLocalStorage,
	fetchManufacturerOrdersFromLocalStorage
} from '../../../store/reducers/ActionCreators'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { InfoItems } from '../../UI/InfoItem/InfoItems'
import { Loader } from '../../UI/Loader/Loader'
import { TabContent } from '../../UI/TabComponent/Tabs/TabContent'
import { Tabs } from '../../UI/TabComponent/Tabs/Tabs'
import { Title } from '../../UI/Title/Title'
import { ManufacturersTable } from './ManufacturersTable'

interface IManufacturerProps {
	manufacturerId?: string
}

export const Manufacturer: FC<IManufacturerProps> = ({ manufacturerId }) => {
	const [manufacturer, setManufacturer] = useState<IManufacturer>()
	const [activeTab, setActiveTab] = useState('tab1')
	const {
		manufacturerClients: clients,
		isLoading: isLoadingClients,
		error: errorClients
	} = useAppSelector((state) => state.manufacturerClientsReducer)
	const {
		manufacturerOrders: orders,
		isLoading: isLoadingOrders,
		error: errorOrders
	} = useAppSelector((state) => state.manufacturerOrdersReducer)

	const [clientsColumns] = useState({
		id: { path: 'id', name: 'ID' },
		orderDate: { path: 'orderDate', name: 'Дата заявки' },
		endDate: { path: 'endDate', name: 'Дата окончания' },
		clientName: { path: 'clientName', name: 'Клиент' },
		totalAmount: { path: 'totalAmount', name: 'Общая сумма (руб.)' },
		paidAmount: { path: 'paidAmount', name: 'Оплачено (руб.)' },
		remainder: { path: 'remainder', name: 'Остаток оплачен' }
	})

	const [ordersColumns] = useState({
		id: { path: 'id', name: 'ID' },
		orderDate: { path: 'orderDate', name: 'Дата' },
		organization: { path: 'organization', name: 'Организация' },
		orderName: { path: 'orderName', name: 'Наименование' },
		orderCount: { path: 'orderCount', name: 'Кол-во (шт.)' },
		orderStatus: { path: 'orderStatus', name: 'Статус' },
		orderAmount: { path: 'orderAmount', name: 'Стоимость (руб.)' },
		orderConfirmed: { path: 'orderConfirmed', name: 'Заказ подтвержден' }
	})

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchManufacturerOrdersFromLocalStorage())
		dispatch(fetchManufacturerClientsFromLocalStorage())
		if (manufacturerId) {
			API.manufacturers.getById(manufacturerId).then((data: any) => {
				setManufacturer(data)
			})
		}
	}, [manufacturerId, dispatch])

	if (manufacturer) {
		return (
			<div>
				<Breadcrumbs />
				<Title classname='title-h2' title='Подробнее' />
				<div className='statistics__wrapper'>
					<InfoItems manufacturer={manufacturer} />
				</div>
				<div className='statistics__wrapper'>
					<Tabs
						firstTabNavTitle='Клиенты организации'
						secondTabNavTitle='Заказы организации'
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					>
						<TabContent activeTab={activeTab} id='tab1'>
							{isLoadingClients && <Loader />}
							{errorClients && <h1>Произошла ошибка при загрузке клиентов</h1>}
							<ManufacturersTable
								data={clients}
								columns={clientsColumns}
								title='Клиенты'
							/>
						</TabContent>
						<TabContent activeTab={activeTab} id='tab2'>
							{isLoadingOrders && <Loader />}
							{errorOrders && <h1>Произошла ошибка при загрузке заказов</h1>}
							<ManufacturersTable
								data={orders}
								columns={ordersColumns}
								title='Заказы'
							/>
						</TabContent>
					</Tabs>
				</div>
			</div>
		)
	} else {
		return <Loader />
	}
}
