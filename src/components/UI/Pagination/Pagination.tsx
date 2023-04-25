import _ from 'lodash'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Pagination.scss'

export interface IPaginationProps {
  itemsCount: number
  pageSize: number
  onPageChange: (pageIndex: number) => void
  currentPage: number
}

export const Pagination: FC<IPaginationProps> = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize)

  if (pageCount === 1) return null

  const pages = _.range(1, pageCount + 1)

  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => (
          <li className='page-item' key={`page_${page}`}>
            <Link
              onClick={() => onPageChange(page)}
              className={'page-link' + (page === currentPage ? ' active' : '')}
              to=''
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
