import { FC } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import './Loader.scss'

export const Loader: FC = () => {
  return (
    <div className='loader'>
      <InfinitySpin width='200' color='#A75C5C' />
    </div>
  )
}
