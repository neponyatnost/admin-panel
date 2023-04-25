import { FC } from 'react'

export interface IFormComponentProps {
  children: React.ReactNode
}

export const FormComponent: FC<IFormComponentProps> = ({ children }) => {
  return <form>{children}</form>
}
