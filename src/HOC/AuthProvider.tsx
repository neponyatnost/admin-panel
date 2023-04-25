import { createContext, useState } from 'react'

interface IAuthProviderProps {
	children: React.ReactNode
}

export const AuthContext = createContext<any>(undefined)
export const AuthProvider = ({ children }: IAuthProviderProps) => {
	const [user, setUser] = useState('')

	const login = (newUser: string, callback: () => void) => {
		setUser(newUser)
		callback()
	}
	const logout = (callback: () => void) => {
		setUser('')
		callback()
	}

	const value = { user, login, logout }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
