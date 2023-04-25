import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IManufacturer } from '../../models/IManufacturer'

interface ManufacturerState {
  manufacturers: IManufacturer[]
  isLoading: boolean
  error: string
}

const initialState: ManufacturerState = {
  manufacturers: [],
  isLoading: false,
  error: '',
}

export const manufacturerSlice = createSlice({
  name: 'manufacturer',
  initialState,
  reducers: {
    fetchAllManufacturers(state) {
      state.isLoading = true
    },
    fetchAllManufacturersSuccess(
      state,
      action: PayloadAction<IManufacturer[]>
    ) {
      state.isLoading = false
      state.error = ''
      state.manufacturers = action.payload
    },
    fetchAllManufacturersError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default manufacturerSlice.reducer
