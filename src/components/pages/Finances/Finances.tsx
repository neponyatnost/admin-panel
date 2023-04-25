import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import arrowIcon from '../../../img/arrow-icon.svg'
import walletIconOrange from '../../../img/wallet-icon-orange.svg'
import walletIcon from '../../../img/wallet-icon.svg'
import { fetchAdminPayments } from '../../../store/reducers/ActionCreators'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Loader } from '../../UI/Loader/Loader'
import { TabContent } from '../../UI/TabComponent/Tabs/TabContent'
import { Tabs } from '../../UI/TabComponent/Tabs/Tabs'
import { Title } from '../../UI/Title/Title'
import { ClientsTable } from '../Clients/ClientsTable'
import './Finances.scss'
import { FinancesBlock } from './FinancesBlock/FinancesBlock'

export const Finances = () => {
	const [activeTab, setActiveTab] = useState('tab1')
	const { adminPayments, isLoading, error } = useAppSelector(
		(state) => state.adminPaymentsReducer
	)
	const dispatch = useAppDispatch()
	const payments = adminPayments.map((payment) => payment.paid)
	const paymentsSum = payments.reduce((a, b) => a + b, 0)

	const [paymentColumns] = useState({
		id: { path: 'id', name: 'ID' },
		paymentDate: { path: 'paymentDate', name: 'Дата платежа' },
		company: { path: 'company', name: 'Организация' },
		paymentType: { path: 'paymentType', name: 'Тип платежа' },
		paid: { path: 'paid', name: 'Сумма платежа' }
	})

	useEffect(() => {
		dispatch(fetchAdminPayments())
	}, [dispatch])

	return (
		<div className='statistics'>
			<Breadcrumbs />
			<Title classname='title-h2' title='Финансы' />
			<div className='statistics__wrapper'>
				<FinancesBlock
					classname=''
					icon={walletIcon}
					title='Баланс компании'
					sum={paymentsSum + paymentsSum}
				/>
			</div>
			<div className='statistics__wrapper'>
				<FinancesBlock
					classname='brown-color'
					icon={arrowIcon}
					title='Доход от поставщиков'
					sum={paymentsSum}
				/>
				<FinancesBlock
					classname='brown-color'
					icon={arrowIcon}
					title='Доход от производителей'
					sum={paymentsSum}
				/>
				<FinancesBlock
					classname='gold-color'
					icon={walletIconOrange}
					title='В заморозке'
					sum={1000000}
				/>
			</div>
			<div className='statistics__wrapper'>
				<Tabs
					firstTabNavTitle='Поставщики'
					secondTabNavTitle='Производители'
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				>
					<TabContent activeTab={activeTab} id='tab1'>
						{isLoading && <Loader />}
						{error && (
							<h1>Произошла ошибка при загрузке платежей поставщиков</h1>
						)}
						<ClientsTable
							columns={paymentColumns}
							data={adminPayments}
							title='Статистика платежей поставщиков'
						/>
					</TabContent>
					<TabContent activeTab={activeTab} id='tab2'>
						{isLoading && <Loader />}
						{error && (
							<h1>Произошла ошибка при загрузке платежей производителей</h1>
						)}
						<ClientsTable
							columns={paymentColumns}
							data={adminPayments}
							title='Статистика платежей производителей'
						/>
					</TabContent>
				</Tabs>
			</div>
		</div>
	)
}
