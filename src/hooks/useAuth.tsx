import { useAppSelector } from './redux'

export const useAuth = () => {
	const { id, email, token } = useAppSelector((state) => state.authReducer)

	return {
		isAuth: !!email,
		id,
		email,
		token
	}
}
