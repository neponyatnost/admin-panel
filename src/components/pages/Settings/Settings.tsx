import React, { useState } from 'react'
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { ImageUpload } from '../../FileUpload/FileUpload'
import { TextField } from '../../UI/Form'
import { RippleButton } from '../../UI/RippleButton/RippleButton'
import { Title } from '../../UI/Title/Title'
import './Settings.scss'

interface IAdminInfoProps {
	name: string
	surname: string
	username: string
	phone: string
	email: string
	address: string
}

export const Settings = () => {
	const [adminInfo, setAdminInfo] = useState<IAdminInfoProps>({
		name: 'Андрей',
		surname: 'Попович',
		username: 'Альфред',
		phone: '+7(585) 585 56 65',
		email: 'Mail@gmail.com',
		address: 'Ул. Лоботрясов д. 33 кв. 33'
	})
	if (!localStorage.getItem('adminInfo')) {
		localStorage.setItem('adminInfo', JSON.stringify(adminInfo))
	}
	const handleChange = ({
		currentTarget
	}: React.FormEvent<HTMLInputElement>) => {
		setAdminInfo((prevState) => ({
			...prevState,
			[currentTarget.name]: currentTarget.value
		}))
	}
	// const handleSubmit = (event: React.FormEvent) => {
	// 	event.preventDefault()
	// }
	return (
		<div className='statistics'>
			<Breadcrumbs />
			<Title classname='title-h2' title='Настройки' />
			<div className='statistics__wrapper'>
				<ImageUpload />
				<div className='user-photo-wrapper'>
					<Title
						classname='title-h3'
						title={adminInfo.name + ' ' + adminInfo.surname}
					/>
					<p className='upload-desc info__text'>
						Максимальный размер файла 10 Мб
					</p>
				</div>
			</div>
			<div className='statistics__wrapper'>
				<TextField
					label='Имя'
					name='name'
					value={adminInfo.name}
					onChange={handleChange}
				/>
				<TextField
					label='Фамилия'
					name='surname'
					value={adminInfo.surname}
					onChange={handleChange}
				/>
				<TextField
					label='Имя пользователя'
					name='username'
					value={adminInfo.username}
					onChange={handleChange}
				/>
				<TextField
					label='Номер телефона'
					name='phone'
					value={adminInfo.phone}
					onChange={handleChange}
				/>
				<TextField
					label='Электроная почта'
					name='email'
					value={adminInfo.email}
					onChange={handleChange}
				/>
				<TextField
					label='Адрес'
					name='address'
					value={adminInfo.address}
					onChange={handleChange}
				/>
				<RippleButton onClick={() => console.log(adminInfo)}>
					Сохранить
				</RippleButton>
			</div>
		</div>
	)
}
