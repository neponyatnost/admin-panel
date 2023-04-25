import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchAllUsers(state) {
      state.isLoading = true
    },
    fetchAllUsersSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    fetchAllUsersError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default userSlice.reducer
