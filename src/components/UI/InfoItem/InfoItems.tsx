import { FC } from 'react'
import { IManufacturer } from '../../../models/IManufacturer'
import { IUser } from '../../../models/IUser'
import { Loader } from '../Loader/Loader'
import { Title } from '../Title/Title'
import { InfoItem } from './InfoItem'
import './InfoItems.scss'

interface IInfoItemsProps {
  user?: IUser
  manufacturer?: IManufacturer
}

export const InfoItems: FC<IInfoItemsProps> = ({ user, manufacturer }) => {
  if (user) {
    return (
      <div className='info'>
        <Title classname='title-h3' title='Информация о клиенте' />
        <InfoItem label='ID' text={user.id.toString()} />
        <InfoItem label='Имя' text={user.name} />
        <InfoItem label='Имя пользователя' text={user.username} />
        <InfoItem label='Номер телефона' text={user.phone} />
        <InfoItem label='Эл. почта' text={user.email} />
        <InfoItem
          label='Адрес'
          text={
            <p>
              Ул. {user.address.street} д. {user.address.building} кв.{' '}
              {user.address.flat}
            </p>
          }
        />
      </div>
    )
  }
  if (manufacturer) {
    return (
      <div className='info'>
        <Title classname='title-h3' title='Информация о производителе' />
        <InfoItem
          manufacturer={true}
          label='ID'
          text={manufacturer.id.toString()}
        />
        <InfoItem label='Название компании' text={manufacturer.name} />
        <InfoItem label='Время работы' text={manufacturer.workingHours} />
        <InfoItem label='' text={manufacturer.logo} />
        <InfoItem
          manufacturer={true}
          label='О компании'
          text={manufacturer.aboutManufacturer}
        />
        <InfoItem
          manufacturer={true}
          label='Описание товара'
          text={manufacturer.aboutProducts}
        />
        <InfoItem
          manufacturer={true}
          label='Описание услуг'
          text={manufacturer.aboutServices}
        />
        <InfoItem label='Номер телефона' text={manufacturer.phone} />
        <InfoItem label='Эл. почта' text={manufacturer.email} />
        <InfoItem
          label='Адрес'
          text={
            <p>
              Ул. {manufacturer.address.street} д.{' '}
              {manufacturer.address.building} кв. {manufacturer.address.flat}
            </p>
          }
        />
      </div>
    )
  }
  return <Loader />
}
