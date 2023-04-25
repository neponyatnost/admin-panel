import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthState {
	id: string | null
	email: string | null
	token: string | null
}

const initialState: IAuthState = {
	id: null,
	email: null,
	token: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IAuthState>) {
			state.id = action.payload.id
			state.email = action.payload.email
			state.token = action.payload.token
		},
		removeUser(state) {
			state.id = null
			state.email = null
			state.token = null
		}
	}
})

export const { removeUser, setUser } = authSlice.actions
export default authSlice.reducer
