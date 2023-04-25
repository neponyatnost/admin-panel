import { startOfYesterday } from 'date-fns'
import { FC, useState } from 'react'
import { Chart } from '../../Chart/Chart'
import { DateRangeComponent } from '../../UI/DateRangeComponent/DateRangeComponent'
import { Stats } from '../../UI/Stats/Stats'
import { ClientsTable } from './ClientsTable'

export interface IClientsStatsLayoutProps {
	data: any[]
	columns: {}
}

export const ClientsStatsLayout: FC<IClientsStatsLayoutProps> = ({
	data,
	columns
}) => {
	const yesterdayDate: string = startOfYesterday().toLocaleString('ru', {
		day: 'numeric',
		month: 'short'
	})
	const todayDate: string = new Date().toLocaleString('ru', {
		day: 'numeric',
		month: 'short'
	})
	const [daysState, setDaysState] = useState<string[]>([
		yesterdayDate,
		todayDate
	])

	const handleDaysChange = (daysState: string[]) => {
		setDaysState(daysState)
	}

	return (
		<>
			<div className='statistics__wrapper'>
				<Stats
					icon={true}
					span=' человек'
					title='Всего'
					daysState={daysState}
				/>
				<Stats
					icon={false}
					span=' чел.'
					title='Новых за 30 дней'
					daysState={daysState}
				/>
				<DateRangeComponent onChange={handleDaysChange} />
				<Chart tooltipLabel='Новых клиентов' daysState={daysState} />
			</div>
			<div className='statistics__wrapper'>
				<ClientsTable columns={columns} data={data} title='Список клиентов' />
			</div>
		</>
	)
}
