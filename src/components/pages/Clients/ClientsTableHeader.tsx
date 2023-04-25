import { FC } from 'react'

interface IClientsTableHeaderProps {
  onSort: (item: any) => any
  selectedSort: ISortByProps
  columns: any
}

interface ISortByProps {
  path: string
  order: boolean | 'asc' | 'desc'
}

export const ClientsTableHeader: FC<IClientsTableHeaderProps> = ({
  onSort,
  selectedSort,
  columns,
}) => {
  const handleSort = (item: string) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        path: item,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ path: item, order: 'desc' })
    }
  }
  return (
    <thead className='table-header'>
      <tr className='table-row'>
        <>
          {Object.keys(columns).map((column) => (
            <th
              key={column}
              className='table-row-heading'
              onClick={
                columns[column].path
                  ? () => handleSort(columns[column].path)
                  : undefined
              }
            >
              {columns[column].name}
            </th>
          ))}
        </>
      </tr>
    </thead>
  )
}
