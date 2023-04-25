export interface IUsers {
	id: number
	name: string
	username: string
	phone: string
	email: string
	isAdmin: boolean
	dateRegistered: string
	ordersNumber: number
	ordersAmount: number
	inFreeze: number
	address: Address
	orders: Order[]
}

export interface Address {
	street: string
	building: number
	flat: number
}

export interface Order {
	id: number
	name: string
	count: number
	date: string
	status: string
	price: number
	confirmed: boolean
}

const users: IUsers[] = [
	{
		id: 1,
		name: 'Андрей Попович',
		username: 'alfred',
		phone: '+79995855665',
		email: 'mail@gmail.com',
		isAdmin: false,
		dateRegistered: '25.01.2022',
		ordersNumber: 10,
		ordersAmount: 20000,
		inFreeze: 5000,
		address: {
			street: 'Лоботрясов',
			building: 33,
			flat: 33
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 2,
		name: 'Елена Еленова',
		username: 'lenka_elenka',
		phone: '+79995855666',
		email: 'mail1@gmail.com',
		isAdmin: false,
		dateRegistered: '26.01.2022',
		ordersNumber: 11,
		ordersAmount: 30000,
		inFreeze: 6000,
		address: {
			street: 'Пушкина',
			building: 34,
			flat: 34
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 3,
		name: 'Екатерина Екатеринина',
		username: 'katuha_cat',
		phone: '+79995855667',
		email: 'mail2@gmail.com',
		isAdmin: false,
		dateRegistered: '24.01.2022',
		ordersNumber: 12,
		ordersAmount: 40000,
		inFreeze: 7000,
		address: {
			street: 'Ленина',
			building: 35,
			flat: 35
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 4,
		name: 'Илья Ильин',
		username: 'iluha_iluha',
		phone: '+79995855668',
		email: 'mail3@gmail.com',
		isAdmin: false,
		dateRegistered: '23.01.2022',
		ordersNumber: 13,
		ordersAmount: 50000,
		inFreeze: 8000,
		address: {
			street: 'Сталина',
			building: 36,
			flat: 36
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 5,
		name: 'Антон Антонов',
		username: 'antoha_antonov',
		phone: '+79995855669',
		email: 'mail4@gmail.com',
		isAdmin: false,
		dateRegistered: '22.01.2022',
		ordersNumber: 14,
		ordersAmount: 60000,
		inFreeze: 9000,
		address: {
			street: 'Гагарина',
			building: 37,
			flat: 37
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 6,
		name: 'Сергей Сергеев',
		username: 'sergeev_serega',
		phone: '+79995855670',
		email: 'mail5@gmail.com',
		isAdmin: false,
		dateRegistered: '21.01.2022',
		ordersNumber: 15,
		ordersAmount: 70000,
		inFreeze: 4000,
		address: {
			street: 'Рузвельта',
			building: 38,
			flat: 38
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 2,
				date: '21.01.2022',
				status: 'В работе',
				price: 10500,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 1,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 12345,
				confirmed: true
			}
		]
	},
	{
		id: 7,
		name: 'Иван Иванов',
		username: 'ivan_ivanov',
		phone: '+79995855671',
		email: 'mail6@gmail.com',
		isAdmin: false,
		dateRegistered: '20.01.2022',
		ordersNumber: 16,
		ordersAmount: 80000,
		inFreeze: 3000,
		address: {
			street: 'Ломоносова',
			building: 39,
			flat: 39
		},
		orders: [
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-2',
				count: 1,
				date: '21.01.2022',
				status: 'В работе',
				price: 15000,
				confirmed: false
			},
			// венок
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-3',
				count: 3,
				date: '21.01.2022',
				status: 'Выполнен',
				price: 5000,
				confirmed: true
			},
			{
				id: Math.floor(Math.random() * 100),
				name: 'Название заказа-1',
				count: 1,
				date: '21.01.2022',
				status: 'Отменен',
				price: 50000,
				confirmed: false
			}
		]
	}
]

if (!localStorage.getItem('users')) {
	localStorage.setItem('users', JSON.stringify(users))
}

const fetchAll = (): Promise<Array<IUsers>> =>
	new Promise((resolve) => {
		window.setTimeout(() => {
			const users = localStorage.getItem('users')
			if (users) {
				resolve(JSON.parse(users))
			}
		}, 1000)
	})

const getById = (id: string): Promise<any> =>
	new Promise((resolve) => {
		window.setTimeout(() => {
			if (Number(id)) {
				const user = JSON.parse(localStorage.getItem('users')!).find(
					(user: IUsers) => user.id === Number(id)
				)
				if (user) {
					resolve(user)
				}
			}
		}, 1000)
	})

const update = (id: string, data: any) =>
	new Promise((resolve) => {
		const users = JSON.parse(localStorage.getItem('users')!)
		const userIndex = users.findIndex((user: any) => user.id === Number(id))
		users[userIndex] = { ...users[userIndex], ...data }
		localStorage.setItem('users', JSON.stringify(users))
		resolve(users[userIndex])
	})

export const statusColors = (status: string) => {
	let color = []
	if (status === 'В работе') {
		color.push('gold')
	} else if (status === 'Отменен') {
		color.push('red')
	} else if (status === 'Выполнен') {
		color.push('green')
	}
	return color[0]
}

// eslint-disable-next-line import/no-anonymous-default-export
export { fetchAll, getById, update }
