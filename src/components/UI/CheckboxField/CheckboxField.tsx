import { FC } from 'react'
import './CheckboxField.scss'

export interface ICheckboxFieldProps {
  id: string
  isChecked?: boolean
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: string | React.ReactNode
}

export const CheckboxField: FC<ICheckboxFieldProps> = ({
  id,
  label,
  isChecked,
  onChange,
  children,
}) => {
  return (
    <div className='checkbox'>
      <input
        onChange={onChange}
        type='checkbox'
        className='checkbox__input'
        value={label}
        name={label}
        id={id}
        checked={isChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
