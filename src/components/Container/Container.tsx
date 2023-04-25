import React, { FC } from 'react'
import './Container.scss'

type Props = {
  children: React.ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <div className='container'>
        <div className='block'>{children}</div>
      </div>
    </>
  )
}
