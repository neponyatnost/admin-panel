import { FC } from 'react'
import personIcon from '../../../img/person-icon.svg'
import { Title } from '../Title/Title'
import { getData } from './getData'
import './Stats.scss'

export interface IStatsProps {
  title: string
  span: string
  icon: boolean
  daysState: string[]
}

export const Stats: FC<IStatsProps> = ({ title, span, icon, daysState }) => {
  const res = getData(daysState).res

  return (
    <div className='total'>
      <div>
        <Title title={title} classname='title-h4' />
        {icon ? (
          <div className='total__container'>
            <img src={personIcon} alt='Total stats' width={25} height={25} />
            <p className='title-h2 total__count'>{res + span}</p>
          </div>
        ) : (
          <div className='total__container'>
            <p className='title-h2 total__count'>
              {'+' + Math.round(res / 2) + span}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
