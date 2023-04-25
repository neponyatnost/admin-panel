import { Navigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../store/reducers/authSlice'

export const Home = () => {
	const dispatch = useAppDispatch()
	const { isAuth } = useAuth()

	return isAuth ? (
		<>
			<h1>Home</h1>
			<button onClick={() => dispatch(removeUser())}>Log out</button>
		</>
	) : (
		<Navigate to='/login' />
	)
}
