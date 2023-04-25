import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface IReqiureAuthProps {
	children: JSX.Element
}

export const RequireAuth = ({ children }: IReqiureAuthProps) => {
	const { isAuth } = useAuth()

	if (!isAuth) {
		return <Navigate to='/login' replace={true} />
	}
	return children
}
