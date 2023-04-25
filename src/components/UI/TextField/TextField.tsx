import { FC, useState } from 'react'
import showPasswordButton from '../../../img/visibility.png'
import './TextField.scss'

interface ITextFieldProps {
	label: string
	type?: string
	name: string
	value: string
	error?: string
	onChange: ({ currentTarget }: React.FormEvent<HTMLInputElement>) => void
}

export const TextField: FC<ITextFieldProps> = ({
	label,
	type,
	name,
	value,
	error,
	onChange
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const getInputClasses = (): string => {
		if (error) {
			return 'form-input invalid'
		}
		if (type === 'password') {
			return 'form-input password'
		}
		return 'form-input'
	}

	const toggleShowPassword = (): void => {
		setShowPassword((prevState) => !prevState)
	}

	return (
		<>
			<label className='form-input-label' htmlFor={name}>
				{label}

				<input
					type={showPassword ? 'text' : type}
					id={name}
					value={value}
					onChange={onChange}
					name={name}
					className={getInputClasses()}
					autoComplete={'none'}
				/>
			</label>
			{type === 'password' && (
				<img
					src={showPasswordButton}
					alt='Show or hide password button'
					onClick={toggleShowPassword}
					className='show-password'
				/>
			)}
			{error && <p className='error-field'>{error}</p>}
		</>
	)
}

TextField.defaultProps = {
	type: 'text'
}
