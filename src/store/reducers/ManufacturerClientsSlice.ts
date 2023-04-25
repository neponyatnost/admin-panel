import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IManufacturerClients } from '../../models/IManufacturer'

interface ManufacturerClientsState {
  manufacturerClients: IManufacturerClients[]
  isLoading: boolean
  error: string
}

const initialState: ManufacturerClientsState = {
  manufacturerClients: [],
  isLoading: false,
  error: '',
}

export const manufacturerClientsSlice = createSlice({
  name: 'manufacturerClients',
  initialState,
  reducers: {
    fetchAllManufacturerClients(state) {
      state.isLoading = true
    },
    fetchAllManufacturerClientsSuccess(
      state,
      action: PayloadAction<IManufacturerClients[]>
    ) {
      state.isLoading = false
      state.error = ''
      state.manufacturerClients = action.payload
    },
    fetchAllManufacturerClientsError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default manufacturerClientsSlice.reducer
