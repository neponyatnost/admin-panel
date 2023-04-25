import { FC } from 'react'
import './Button.scss'

export interface IButtonProps {
  text: string
  disabled: boolean
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({ text, disabled, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className='button'
        type='submit'
        disabled={disabled}
      >
        {text}
      </button>
    </>
  )
}
