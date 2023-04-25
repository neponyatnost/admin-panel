import axios from 'axios'
import { IAdminPayments } from '../../models/IAdminPayments'
import {
	IManufacturer,
	IManufacturerClientOrders,
	IManufacturerClients,
	IManufacturerOrders
} from '../../models/IManufacturer'
import { IUser } from '../../models/IUser'
import { AppDispatch } from '../store'
import { adminPaymentsSlice } from './AdminPaymentsSlice'
import { manufacturerClientOrdersSlice } from './ManufacturerClientOrdersSlice'
import { manufacturerClientsSlice } from './ManufacturerClientsSlice'
import { manufacturerOrdersSlice } from './ManufacturerOrdersSlice'
import { manufacturerSlice } from './ManufacturerSlice'
import { userSlice } from './UserSlice'
//========================================================================================================================================================

export const fetchUsersFromLocalStorage = () => (dispatch: AppDispatch) => {
	try {
		if (localStorage.getItem('users')) {
			dispatch(userSlice.actions.fetchAllUsers())
			const response = localStorage.getItem('users')
			dispatch(userSlice.actions.fetchAllUsersSuccess(JSON.parse(response!)))
		}
	} catch (error: any) {
		dispatch(userSlice.actions.fetchAllUsersError(error.message))
	}
}
//========================================================================================================================================================

export const fetchManufacturersFromLocalStorage =
	() => (dispatch: AppDispatch) => {
		try {
			if (localStorage.getItem('manufacturers')) {
				dispatch(manufacturerSlice.actions.fetchAllManufacturers())
				const response = localStorage.getItem('manufacturers')
				dispatch(
					manufacturerSlice.actions.fetchAllManufacturersSuccess(
						JSON.parse(response!)
					)
				)
			}
		} catch (error: any) {
			dispatch(
				manufacturerSlice.actions.fetchAllManufacturersError(error.message)
			)
		}
	}
//========================================================================================================================================================

export const fetchManufacturerClientsFromLocalStorage =
	() => (dispatch: AppDispatch) => {
		try {
			if (localStorage.getItem('manufacturerClients')) {
				dispatch(manufacturerClientsSlice.actions.fetchAllManufacturerClients())
				const response = localStorage.getItem('manufacturerClients')
				dispatch(
					manufacturerClientsSlice.actions.fetchAllManufacturerClientsSuccess(
						JSON.parse(response!)
					)
				)
			}
		} catch (error: any) {
			dispatch(
				manufacturerClientsSlice.actions.fetchAllManufacturerClientsError(
					error.message
				)
			)
		}
	}

//========================================================================================================================================================

export const fetchManufacturerOrdersFromLocalStorage =
	() => (dispatch: AppDispatch) => {
		try {
			if (localStorage.getItem('manufacturerOrders')) {
				dispatch(manufacturerOrdersSlice.actions.fetchAllManufacturerOrders())
				const response = localStorage.getItem('manufacturerOrders')
				dispatch(
					manufacturerOrdersSlice.actions.fetchAllManufacturerOrdersSuccess(
						JSON.parse(response!)
					)
				)
			}
		} catch (error: any) {
			dispatch(
				manufacturerOrdersSlice.actions.fetchAllManufacturerOrdersError(
					error.message
				)
			)
		}
	}
//========================================================================================================================================================

export const fetchAdminPaymentsFromLocalStorage =
	() => (dispatch: AppDispatch) => {
		try {
			if (localStorage.getItem('adminPayments')) {
				dispatch(adminPaymentsSlice.actions.fetchAllAdminPayments())
				const response = localStorage.getItem('adminPayments')
				dispatch(
					adminPaymentsSlice.actions.fetchAllAdminPaymentsSuccess(
						JSON.parse(response!)
					)
				)
			}
		} catch (error: any) {
			dispatch(
				adminPaymentsSlice.actions.fetchAllAdminPaymentsError(error.message)
			)
		}
	}
//========================================================================================================================================================

export const fetchManufacturerClientOrdersFromLocalStorage =
	() => (dispatch: AppDispatch) => {
		try {
			if (localStorage.getItem('manufacturerClientOrders')) {
				dispatch(
					manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrders()
				)
				const response = localStorage.getItem('manufacturerClientOrders')
				dispatch(
					manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrdersSuccess(
						JSON.parse(response!)
					)
				)
			}
		} catch (error: any) {
			dispatch(
				manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrdersError(
					error.message
				)
			)
		}
	}

//========================================================================================================================================================

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.fetchAllUsers())
		const response = await axios.get<IUser[]>(
			'http://localhost:3000/users.json'
		)
		dispatch(userSlice.actions.fetchAllUsersSuccess(response.data))
	} catch (error: any) {
		dispatch(userSlice.actions.fetchAllUsersError(error.message))
	}
}
//========================================================================================================================================================

export const fetchManufacturers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(manufacturerSlice.actions.fetchAllManufacturers())
		const response = await axios.get<IManufacturer[]>(
			'http://localhost:3000/manufacturers.json'
		)
		dispatch(
			manufacturerSlice.actions.fetchAllManufacturersSuccess(response.data)
		)
	} catch (error: any) {
		dispatch(
			manufacturerSlice.actions.fetchAllManufacturersError(error.message)
		)
	}
}
//========================================================================================================================================================

export const fetchAdminPayments = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(adminPaymentsSlice.actions.fetchAllAdminPayments())
		const response = await axios.get<IAdminPayments[]>(
			'http://localhost:3000/adminPayments.json'
		)
		dispatch(
			adminPaymentsSlice.actions.fetchAllAdminPaymentsSuccess(response.data)
		)
	} catch (error: any) {
		dispatch(
			adminPaymentsSlice.actions.fetchAllAdminPaymentsError(error.message)
		)
	}
}
//========================================================================================================================================================

export const fetchManufacturerOrders = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(manufacturerOrdersSlice.actions.fetchAllManufacturerOrders())
		const response = await axios.get<IManufacturerOrders[]>(
			'http://localhost:3000/manufacturerOrders.json'
		)
		dispatch(
			manufacturerOrdersSlice.actions.fetchAllManufacturerOrdersSuccess(
				response.data
			)
		)
	} catch (error: any) {
		dispatch(
			manufacturerOrdersSlice.actions.fetchAllManufacturerOrdersError(
				error.message
			)
		)
	}
}
//========================================================================================================================================================

export const fetchManufacturerClients = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(manufacturerClientsSlice.actions.fetchAllManufacturerClients())
		const response = await axios.get<IManufacturerClients[]>(
			'http://localhost:3000/manufacturerClients.json'
		)
		dispatch(
			manufacturerClientsSlice.actions.fetchAllManufacturerClientsSuccess(
				response.data
			)
		)
	} catch (error: any) {
		dispatch(
			manufacturerClientsSlice.actions.fetchAllManufacturerClientsError(
				error.message
			)
		)
	}
}
//========================================================================================================================================================
export const fetchManufacturerClientOrders =
	() => async (dispatch: AppDispatch) => {
		try {
			dispatch(
				manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrders()
			)
			const response = await axios.get<IManufacturerClientOrders[]>(
				'http://localhost:3000/manufacturerClientOrders.json'
			)
			dispatch(
				manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrdersSuccess(
					response.data
				)
			)
		} catch (error: any) {
			dispatch(
				manufacturerClientOrdersSlice.actions.fetchAllManufacturerClientOrdersError(
					error.message
				)
			)
		}
	}
