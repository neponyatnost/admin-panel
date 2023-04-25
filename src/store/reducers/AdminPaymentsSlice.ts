import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAdminPayments } from '../../models/IAdminPayments'

interface AdminPaymentsState {
  adminPayments: IAdminPayments[]
  isLoading: boolean
  error: string
}

const initialState: AdminPaymentsState = {
  adminPayments: [],
  isLoading: false,
  error: '',
}

export const adminPaymentsSlice = createSlice({
  name: 'adminPayments',
  initialState,
  reducers: {
    fetchAllAdminPayments(state) {
      state.isLoading = true
    },
    fetchAllAdminPaymentsSuccess(
      state,
      action: PayloadAction<IAdminPayments[]>
    ) {
      state.isLoading = false
      state.error = ''
      state.adminPayments = action.payload
    },
    fetchAllAdminPaymentsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default adminPaymentsSlice.reducer
