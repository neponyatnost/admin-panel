import React, { FC } from 'react'
import './Title.scss'

export interface ITitleProps {
  title: string
  classname: string
}

export const Title: FC<ITitleProps> = ({ title, classname }) => {
  return <div className={classname}>{title}</div>
}
