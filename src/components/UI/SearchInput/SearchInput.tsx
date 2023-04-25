import { FC } from 'react'
import './SearchInput.scss'

export interface ISearchInputProps {
  type: string
  placeholder: string
  onChange: ({ currentTarget }: React.FormEvent<HTMLInputElement>) => void
  name: string
  value: string
}

export const SearchInput: FC<ISearchInputProps> = ({
  type,
  placeholder,
  onChange,
  name,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      className='input-search'
    />
  )
}
