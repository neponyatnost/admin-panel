export interface IUser {
  id: number | string
  name: string
  email: string
  username: string
  phone: string
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
