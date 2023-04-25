import { FC } from 'react'
import { Title } from '../../../UI/Title/Title'
import './FinancesBlock.scss'

interface IFinancesBlockProps {
  title: string
  icon: string
  sum: number
  classname: string
}

export const FinancesBlock: FC<IFinancesBlockProps> = ({
  title,
  icon,
  sum,
  classname,
}) => {
  return (
    <div className='finances-block'>
      <div>
        <Title title={title} classname={'title-h4 ' + classname} />
        <div className='finances-block__container'>
          <img src={icon} alt='Total stats' width={25} height={25} />
          <p className={'title-h2 finances-block__count ' + classname}>
            {sum} руб.
          </p>
        </div>
      </div>
    </div>
  )
}
