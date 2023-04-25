export interface IManufacturer {
  id: number
  name: string
  dateRegistered: string
  completedOrders: number
  completedOrdersAmount: number
  inFreeze: number
  workingHours: string
  logo: string
  aboutManufacturer: string
  aboutProducts: string
  aboutServices: string
  phone: string
  email: string
  address: Address
}

export interface Address {
  street: string
  building: number
  flat: number
}

export interface IManufacturerOrders {
  id: number
  orderDate: string
  organization: string
  orderName: string
  orderCount: number
  orderStatus: string
  orderAmount: number
  orderConfirmed: boolean
}

export interface IManufacturerClients {
  id: number
  orderDate: string
  endDate: string
  clientName: string
  totalAmount: number
  paidAmount: number
  remainder: boolean
}

export interface IManufacturerClientOrders {
  id: number
  photo: string
  vendorCode: string
  type: string
  name: string
  inStock: boolean
  price: number
}
