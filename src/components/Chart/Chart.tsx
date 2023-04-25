import { FC } from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './Chart.scss'
import { getData } from '../UI/Stats/getData'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

export interface IChartProps {
  tooltipLabel: string
  daysState: string[]
}

export const Chart: FC<IChartProps> = ({ tooltipLabel, daysState }) => {
  const brownColor = '#A75C5C'
  const data = getData(daysState).data

  const chartData = {
    labels: daysState,
    datasets: [
      {
        label: tooltipLabel,
        data: data,
        backgroundColor: brownColor,
        borderRadius: 2,
        maxBarThickness: 12,
        width: '100%',
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: '#ffffff',
        displayColors: false,
        padding: 15,
        bodyColor: '#000',
        titleColor: '#a7a7a7',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderColor: '#a7a7a7',
        borderWidth: 1,
        titleFont: {
          size: 15,
        },
        bodyFont: {
          size: 18,
          family: 'Oswald',
          weight: 'bold',
        },
      },
    },
  }

  return (
    <div className='chart'>
      <div className='chart__container'>
        <Bar
          style={{ width: '100%', height: '100%' }}
          data={chartData}
          options={options}
        />
      </div>
    </div>
  )
}
