import React, { useEffect, useState } from 'react'
import { validator } from '../../../utils/validator'
import { CheckboxField } from '../CheckboxField/CheckboxField'
import { RippleButton } from '../RippleButton/RippleButton'
import { TextField } from '../TextField/TextField'
import './LoginForm.scss'

export interface IDataProps {
	login: string
	password: string
	remember: boolean
}

export const LoginForm = () => {
	const [data, setData] = useState<IDataProps>({
		login: '',
		password: '',
		remember: false
	})

	const [errors, setErrors] = useState({
		login: '',
		password: ''
	})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const validatorConfig = {
		login: {
			isRequired: {
				message: 'Буквы латинского алфавита, цифры и дефис (3-16 символов)'
			},
			isLogin: {
				message: 'Минимум 3 символа'
			}
		},
		password: {
			isRequired: {
				message: 'Поле "Пароль" обязательно для заполнения'
			},
			isPassword: {
				message: 'Пароль должен содержать от 6 до 16 символов'
			}
		}
	}

	useEffect(() => {
		validate()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	const isValid = Object.keys(errors).length === 0

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const isValid = validate()
		if (!isValid) return
	}

	const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData((prevState) => ({
			...prevState,
			remember: event.target.checked
		}))
	}

	const handleChange = ({
		currentTarget
	}: React.FormEvent<HTMLInputElement>) => {
		setData((prevState) => ({
			...prevState,
			[currentTarget.name]: currentTarget.value
		}))
	}

	return (
		<div className='login-group'>
			<div className='form-group'>
				<form onSubmit={handleSubmit}>
					<TextField
						label='Логин'
						name='login'
						value={data.login}
						error={errors.login}
						onChange={handleChange}
					/>
					<TextField
						label='Пароль'
						name='password'
						value={data.password}
						type='password'
						error={errors.password}
						onChange={handleChange}
					></TextField>
					<CheckboxField
						id='remember'
						label='remember'
						isChecked={data.remember}
						onChange={handleChangeCheckbox}
					>
						Запомнить меня
					</CheckboxField>
					<RippleButton
						onClick={() => {}}
						children={'Отправить'}
						disabled={!isValid}
					/>
				</form>
			</div>
		</div>
	)
}
