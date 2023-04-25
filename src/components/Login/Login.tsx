import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/reducers/authSlice'
import { Form } from '../Form/Form'

export const Login: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken
					})
				)
				navigate('/clients')
			})
			.catch(console.error)
	}

	return (
		<div>
			<Form title='Login' handleClick={handleLogin} />
			<p>
				Нет аккаунта?{' '}
				<Link style={{ textDecoration: 'underline' }} to='/register'>
					Зарегистрироваться
				</Link>
			</p>
		</div>
	)
}
