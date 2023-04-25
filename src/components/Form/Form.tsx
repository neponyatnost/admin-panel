import { FC, useState } from 'react'

interface IFormProps {
	title: string
	handleClick: (email: string, pass: string) => void
}

export const Form: FC<IFormProps> = ({ title, handleClick }) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	return (
		<div>
			<input
				type='email'
				name='email'
				id='email'
				value={email}
				onChange={(event) => setEmail(event.currentTarget.value)}
			/>
			<input
				type='password'
				name='password'
				id='password'
				value={pass}
				onChange={(event) => setPass(event.currentTarget.value)}
			/>
			<button onClick={() => handleClick(email, pass)}>{title}</button>
		</div>
	)
}
