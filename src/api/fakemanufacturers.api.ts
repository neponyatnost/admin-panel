import { IManufacturer, IManufacturerClients } from '../models/IManufacturer'

export const manufacturers = [
	{
		id: 1,
		name: 'ООО "Производитель"',
		dateRegistered: '25.01.2022',
		completedOrders: 45645,
		completedOrdersAmount: 67865778,
		inFreeze: 34579,
		workingHours: 'Круглосуточно',
		logo: 'logo',
		aboutManufacturer:
			'Описание производителя Описание производителя Описание производителя Описание производителя',
		aboutProducts:
			'Описание товаров производителя Описание товаров производителя Описание товаров производителя',
		aboutServices:
			'Описание услуг производителя Описание услуг производителя Описание услуг производителя',
		phone: '+7(585) 585 56 65',
		email: 'manufacturer1@gmail.com',
		address: {
			street: 'Колотушкина',
			building: 1,
			flat: 2
		}
	},
	{
		id: 2,
		name: 'ООО "Производитель-1"',
		dateRegistered: '25.01.2026',
		completedOrders: 7689,
		completedOrdersAmount: 5834563,
		inFreeze: 546878,
		workingHours: '09:00 - 21:00',
		logo: 'logo',
		aboutManufacturer:
			'Описание производителя Описание производителя Описание производителя Описание производителя',
		aboutProducts:
			'Описание товаров производителя Описание товаров производителя Описание товаров производителя',
		aboutServices:
			'Описание услуг производителя Описание услуг производителя Описание услуг производителя',
		phone: '+7(585) 585 56 66',
		email: 'manufacturer2@gmail.com',
		address: {
			street: 'Пушкина',
			building: 3,
			flat: 4
		}
	},
	{
		id: 3,
		name: 'ООО "Производитель-2"',
		dateRegistered: '25.01.2020',
		completedOrders: 4253,
		completedOrdersAmount: 34656769,
		inFreeze: 78946,
		workingHours: 'Круглосуточно',
		logo: 'logo',
		aboutManufacturer:
			'Описание производителя Описание производителя Описание производителя Описание производителя',
		aboutProducts:
			'Описание товаров производителя Описание товаров производителя Описание товаров производителя',
		aboutServices:
			'Описание услуг производителя Описание услуг производителя Описание услуг производителя',
		phone: '+7(585) 585 56 67',
		email: 'manufacturer3@gmail.com',
		address: {
			street: 'Улица',
			building: 4,
			flat: 5
		}
	},
	{
		id: 4,
		name: 'ООО "Производитель-3"',
		dateRegistered: '25.01.2021',
		completedOrders: 4343,
		completedOrdersAmount: 456453667,
		inFreeze: 65454,
		workingHours: 'Круглосуточно',
		logo: 'logo',
		aboutManufacturer:
			'Описание производителя Описание производителя Описание производителя Описание производителя',
		aboutProducts:
			'Описание товаров производителя Описание товаров производителя Описание товаров производителя',
		aboutServices:
			'Описание услуг производителя Описание услуг производителя Описание услуг производителя',
		phone: '+7(585) 585 56 68',
		email: 'manufacturer4@gmail.com',
		address: {
			street: 'Петросяна',
			building: 6,
			flat: 7
		}
	},
	{
		id: 5,
		name: 'ООО "Производитель-4"',
		dateRegistered: '25.01.2023',
		completedOrders: 23,
		completedOrdersAmount: 123123123,
		inFreeze: 1231216,
		workingHours: 'Круглосуточно',
		logo: 'logo',
		aboutManufacturer:
			'Описание производителя Описание производителя Описание производителя Описание производителя',
		aboutProducts:
			'Описание товаров производителя Описание товаров производителя Описание товаров производителя',
		aboutServices:
			'Описание услуг производителя Описание услуг производителя Описание услуг производителя',
		phone: '+7(585) 585 56 69',
		email: 'manufacturer5@gmail.com',
		address: {
			street: 'ЛДПР',
			building: 8,
			flat: 9
		}
	}
]

//========================================================================================================================================================

export const manufacturerClients = [
	{
		id: 1,
		orderDate: '25.01.2022',
		endDate: '28.01.2022',
		clientName: 'Иванов Петр',
		totalAmount: 20000,
		paidAmount: 10000,
		remainder: true
	},
	{
		id: 2,
		orderDate: '25.01.2023',
		endDate: '28.01.2023',
		clientName: 'Иванов Антон',
		totalAmount: 23423544,
		paidAmount: 435565,
		remainder: false
	},
	{
		id: 3,
		orderDate: '25.01.2024',
		endDate: '28.01.2024',
		clientName: 'Иванов Иван',
		totalAmount: 54654,
		paidAmount: 32323,
		remainder: false
	}
]

//========================================================================================================================================================

export const manufacturerOrders = [
	{
		id: 1,
		orderDate: '25.02.2022',
		organization: 'ООО "Организация"',
		orderName: 'Автобус "Мерседес"',
		orderCount: 1,
		orderStatus: 'В работе',
		orderAmount: 100000,
		orderConfirmed: false
	},
	{
		id: 2,
		orderDate: '25.02.2023',
		organization: 'ООО "Организация-1"',
		orderName: 'Автобус "Мерседес-1"',
		orderCount: 2,
		orderStatus: 'Выполнен',
		orderAmount: 23232323,
		orderConfirmed: true
	},
	{
		id: 3,
		orderDate: '25.02.2024',
		organization: 'ООО "Организация-2"',
		orderName: 'Автобус "Мерседес-2"',
		orderCount: 3,
		orderStatus: 'Отменен',
		orderAmount: 435645543,
		orderConfirmed: false
	}
]

//========================================================================================================================================================

export const manufacturerClientOrders = [
	{
		id: 1,
		photo:
			'<img src="https://placehold.co/33x33" alt="Заказ клиентов производителя" />',
		vendorCode: '123456',
		type: 'Базовый',
		name: 'Заказ-1',
		inStock: true,
		price: 123
	},
	{
		id: 2,
		photo:
			'<img src="https://placehold.co/33x33" alt="Заказ клиентов производителя" />',
		vendorCode: '123456',
		type: 'Базовый',
		name: 'Заказ-2',
		inStock: false,
		price: 321
	},
	{
		id: 3,
		photo:
			'<img src="https://placehold.co/33x33" alt="Заказ клиентов производителя" />',
		vendorCode: '123456',
		type: 'Дополнительный',
		name: 'Заказ-3',
		inStock: true,
		price: 456
	},
	{
		id: 4,
		photo:
			'<img src="https://placehold.co/33x33" alt="Заказ клиентов производителя" />',
		vendorCode: '123456',
		type: 'Дополнительный',
		name: 'Заказ-4',
		inStock: false,
		price: 654
	},
	{
		id: 5,
		photo:
			'<img src="https://placehold.co/33x33" alt="Заказ клиентов производителя" />',
		vendorCode: '123456',
		type: 'Дополнительный',
		name: 'Заказ-5',
		inStock: true,
		price: 789
	}
]

//========================================================================================================================================================

export const adminPayments = [
	{
		id: 1,
		paymentDate: '25.01.23',
		company: 'ООО "Компания-1"',
		paymentType: 'Процент от заказа',
		paid: 15000
	},
	{
		id: 2,
		paymentDate: '29.01.23',
		company: 'ООО "Компания-2"',
		paymentType: 'Процент от заказа',
		paid: 12000
	},
	{
		id: 3,
		paymentDate: '28.01.23',
		company: 'ООО "Компания-3"',
		paymentType: 'Процент от заказа',
		paid: 123000
	},
	{
		id: 4,
		paymentDate: '27.01.23',
		company: 'ООО "Компания-4"',
		paymentType: 'Процент от заказа',
		paid: 14000
	},
	{
		id: 5,
		paymentDate: '26.01.23',
		company: 'ООО "Компания-5"',
		paymentType: 'Процент от заказа',
		paid: 144000
	}
]

//========================================================================================================================================================

if (!localStorage.getItem('manufacturers')) {
	localStorage.setItem('manufacturers', JSON.stringify(manufacturers))
}
if (!localStorage.getItem('manufacturerClients')) {
	localStorage.setItem(
		'manufacturerClients',
		JSON.stringify(manufacturerClients)
	)
}
if (!localStorage.getItem('manufacturerOrders')) {
	localStorage.setItem('manufacturerOrders', JSON.stringify(manufacturerOrders))
}
if (!localStorage.getItem('adminPayments')) {
	localStorage.setItem('adminPayments', JSON.stringify(adminPayments))
}
if (!localStorage.getItem('manufacturerClientOrders')) {
	localStorage.setItem(
		'manufacturerClientOrders',
		JSON.stringify(manufacturerClientOrders)
	)
}

const getById = (id: string): Promise<any> =>
	new Promise((resolve) => {
		window.setTimeout(() => {
			if (Number(id)) {
				const manufacturer = JSON.parse(
					localStorage.getItem('manufacturers')!
				).find((manufacturer: IManufacturer) => manufacturer.id === Number(id))
				if (manufacturer) {
					resolve(manufacturer)
				}
			}
		}, 1000)
	})
const getClientById = (id: string): Promise<any> =>
	new Promise((resolve) => {
		window.setTimeout(() => {
			if (Number(id)) {
				const client = JSON.parse(
					localStorage.getItem('manufacturerClients')!
				).find((client: IManufacturerClients) => client.id === Number(id))
				if (client) {
					resolve(client)
				}
			}
		}, 1000)
	})

export { getById, getClientById }
