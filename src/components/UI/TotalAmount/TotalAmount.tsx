import { FC } from 'react'
import './TotalAmount.scss'

interface ITotalAmountProps {
  totalAmount: number | string
}

export const TotalAmount: FC<ITotalAmountProps> = ({ totalAmount }) => {
  return (
    <div className='total-amount'>
      <p>Общая сумма</p>
      <h3>{totalAmount} руб.</h3>
    </div>
  )
}
