import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/reducers/authSlice'
import { Form } from '../Form/Form'

export const SignUp: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSignUp = (email: string, password: string) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
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
			<Form handleClick={handleSignUp} title='Register' />
			<p>
				Есть аккаунт?{' '}
				<Link style={{ textDecoration: 'underline' }} to='/login'>
					Войти
				</Link>
			</p>
		</div>
	)
}
