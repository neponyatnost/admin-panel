import { FC } from 'react'
import { Link } from 'react-router-dom'
import { statusColors } from '../../../api/fakeusers.api'
import '../../UI/Table/TableBody.scss'

interface IClientsTableBodyProps {
	data: any
	columns: any
}

export const ClientsTableBody: FC<IClientsTableBodyProps> = ({
	data,
	columns
}) => {
	const renderContent = (item: any, column: string) => {
		if (column === 'photo') {
			return (
				<img
					src={'https://placehold.co/33x33'}
					alt='Заказ клиентов производителя'
				/>
			)
		}
		// if (column === 'clientName') {
		//   return (
		//     <Link className='table-link' to={`/manufacturer-client/${item.id}`}>
		//       {item[columns[column].path]}
		//     </Link>
		//   )
		// }
		if (columns[column].link) {
			return (
				<Link className='table-link' to={`/clients/${item.id}`}>
					{columns[column].link}
				</Link>
			)
		}

		if (typeof item[column] === 'boolean') {
			return (
				<span className={item[column] === true ? 'confirmed' : 'not-confirmed'}>
					{item[column] === true ? 'Да' : 'Нет'}
				</span>
			)
		}

		return item[columns[column].path]
	}
	return (
		<tbody className='table-body'>
			{data.map((item: any) => (
				<tr key={Math.random()}>
					{Object.keys(columns).map((column) => (
						<td
							className={
								'table-row-data ' + statusColors(item[columns[column].path])
							}
							key={Math.random()}
						>
							{renderContent(item, column)}
						</td>
					))}
				</tr>
			))}
		</tbody>
	)
}
