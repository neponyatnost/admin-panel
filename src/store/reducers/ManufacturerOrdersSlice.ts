import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IManufacturerOrders } from '../../models/IManufacturer'

interface ManufacturerOrdersState {
  manufacturerOrders: IManufacturerOrders[]
  isLoading: boolean
  error: string
}

const initialState: ManufacturerOrdersState = {
  manufacturerOrders: [],
  isLoading: false,
  error: '',
}

export const manufacturerOrdersSlice = createSlice({
  name: 'manufacturerOrders',
  initialState,
  reducers: {
    fetchAllManufacturerOrders(state) {
      state.isLoading = true
    },
    fetchAllManufacturerOrdersSuccess(
      state,
      action: PayloadAction<IManufacturerOrders[]>
    ) {
      state.isLoading = false
      state.error = ''
      state.manufacturerOrders = action.payload
    },
    fetchAllManufacturerOrdersError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default manufacturerOrdersSlice.reducer
