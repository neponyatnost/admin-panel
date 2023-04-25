import { FC } from 'react'
import './InfoItem.scss'

interface IInfoProps {
  label: string
  text: any
  manufacturer?: boolean
}

export const InfoItem: FC<IInfoProps> = ({ label, text, manufacturer }) => {
  return (
    <div
      className={
        manufacturer ? 'info__item manufacturer-info-item' : 'info__item'
      }
    >
      <div className='info__label'>{label}</div>
      <div className='info__text'>{text}</div>
    </div>
  )
}
