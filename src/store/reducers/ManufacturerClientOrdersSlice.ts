import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IManufacturerClientOrders } from '../../models/IManufacturer'

interface ManufacturerClientOrdersState {
  manufacturerClientOrders: IManufacturerClientOrders[]
  isLoading: boolean
  error: string
}

const initialState: ManufacturerClientOrdersState = {
  manufacturerClientOrders: [],
  isLoading: false,
  error: '',
}

export const manufacturerClientOrdersSlice = createSlice({
  name: 'manufacturerClientOrders',
  initialState,
  reducers: {
    fetchAllManufacturerClientOrders(state) {
      state.isLoading = true
    },
    fetchAllManufacturerClientOrdersSuccess(
      state,
      action: PayloadAction<IManufacturerClientOrders[]>
    ) {
      state.isLoading = false
      state.error = ''
      state.manufacturerClientOrders = action.payload
    },
    fetchAllManufacturerClientOrdersError(
      state,
      action: PayloadAction<string>
    ) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default manufacturerClientOrdersSlice.reducer
