import orderBy from 'lodash/orderBy'
import { FC, useEffect, useState } from 'react'
import { paginate } from '../../../utils/paginate'
import { Pagination } from '../../UI/Pagination/Pagination'
import { SearchInput } from '../../UI/SearchInput/SearchInput'
import '../../UI/Table/Table.scss'
import { Title } from '../../UI/Title/Title'
import { ManufacturersTableBody } from './ManufacturersTableBody'
import { ManufacturersTableHeader } from './ManufacturersTableHeader'

interface IManufacturersTableProps {
  data: any[]
  columns: {}
  title: string
  children?: React.ReactNode
}

export interface ISortByProps {
  path: string
  order: boolean | 'asc' | 'desc'
}

export const ManufacturersTable: FC<IManufacturersTableProps> = ({
  data,
  columns,
  title,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<ISortByProps>({
    path: 'name',
    order: 'asc',
  })
  const [searchQuery, setSearchQuery] = useState('')

  const count = data.length
  const pageSize = 4

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  const handleSearchQuery = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(currentTarget.value)
  }

  const filteredData = searchQuery
    ? data.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : data

  const sortedData = orderBy(filteredData, [sortBy.path], [sortBy.order])
  const dataCrop = paginate(sortedData, currentPage, pageSize)

  return (
    <div className='statistics'>
      <div className='t-header'>
        <Title classname='title-h3' title={title} />
        <SearchInput
          type='text'
          name='search'
          placeholder='Поиск...'
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>
      <table className='table'>
        {children || (
          <>
            <ManufacturersTableHeader
              columns={columns}
              onSort={setSortBy}
              selectedSort={sortBy}
            />
            <ManufacturersTableBody data={dataCrop} columns={columns} />
          </>
        )}
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  )
}
