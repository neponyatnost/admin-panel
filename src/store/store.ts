import { combineReducers, configureStore } from '@reduxjs/toolkit'
import adminPaymentsReducer from './reducers/AdminPaymentsSlice'
import authReducer from './reducers/authSlice'
import manufacturerClientOrdersReducer from './reducers/ManufacturerClientOrdersSlice'
import manufacturerClientsReducer from './reducers/ManufacturerClientsSlice'
import manufacturerOrdersReducer from './reducers/ManufacturerOrdersSlice'
import manufacturerReducer from './reducers/ManufacturerSlice'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
	userReducer,
	manufacturerReducer,
	manufacturerClientsReducer,
	manufacturerOrdersReducer,
	adminPaymentsReducer,
	manufacturerClientOrdersReducer,
	authReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
