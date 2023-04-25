import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../../api'
import { IUsers } from '../../../api/fakeusers.api'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Button } from '../../UI/Button/Button'
import { InfoItems } from '../../UI/InfoItem/InfoItems'
import { Loader } from '../../UI/Loader/Loader'
import { Title } from '../../UI/Title/Title'
import { ClientsTable } from './ClientsTable'

interface IClientProps {
	clientId: string
	userOrdersColumns: {}
}

export const Client: FC<IClientProps> = ({ clientId, userOrdersColumns }) => {
	const [user, setUser] = useState<IUsers>()
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`edit`)
	}

	useEffect(() => {
		if (clientId) {
			API.users.getById(clientId).then((data: any) => {
				setUser(data)
			})
		}
	}, [clientId])

	if (user) {
		return (
			<div>
				<Breadcrumbs />
				<Title classname='title-h2' title='Подробнее' />
				<div className='statistics__wrapper'>
					<InfoItems user={user} />
					<Button disabled={false} text='Редактировать' onClick={handleClick} />
				</div>
				<div className='statistics__wrapper'>
					<ClientsTable
						columns={userOrdersColumns}
						data={user.orders}
						title='Заказы клиента'
					/>
				</div>
			</div>
		)
	} else {
		return <Loader />
	}
}
