import { addDays, eachDayOfInterval } from 'date-fns'
import format from 'date-fns/format'
import { ru } from 'date-fns/locale'
import { FC, useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './DateRangeComponent.scss'

export interface IDateRangeComponentProps {
  onChange: (daysState: any) => void
}

export const DateRangeComponent: FC<IDateRangeComponentProps> = ({
  onChange,
}) => {
  const [range, setRange] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [open, setOpen] = useState(false)
  const refOne = useRef<HTMLDivElement>(null)

  const handleChange = (item: any) => {
    const startDateYear: number = Number(
      [item.selection][0].startDate.toLocaleString('ru', {
        year: 'numeric',
      })
    )
    const startDateMonth: number =
      Number(
        [item.selection][0].startDate.toLocaleString('ru', {
          month: 'numeric',
        })
      ) - 1
    const startDateDay: number = Number(
      [item.selection][0].startDate.toLocaleString('ru', {
        day: '2-digit',
      })
    )

    const endDateYear: number = Number(
      [item.selection][0].endDate.toLocaleString('ru', {
        year: 'numeric',
      })
    )
    const endDateMonth: number =
      Number(
        [item.selection][0].endDate.toLocaleString('ru', {
          month: 'numeric',
        })
      ) - 1
    const endDateDay: number = Number(
      [item.selection][0].endDate.toLocaleString('ru', {
        day: '2-digit',
      })
    )

    const result = eachDayOfInterval({
      start: new Date(startDateYear, startDateMonth, startDateDay),
      end: new Date(endDateYear, endDateMonth, endDateDay),
    })

    const eachDayOfIntervalArray = result.map((month) => {
      return month.toLocaleString('ru', {
        day: 'numeric',
        month: 'short',
      })
    })

    onChange(eachDayOfIntervalArray)
    setRange([item.selection])
  }

  const closeOnOutsideClick = (e: MouseEvent): void => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      return setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', closeOnOutsideClick, true)
    return () => window.removeEventListener('click', closeOnOutsideClick, true)
  }, [])

  return (
    <div className='date-range-wrapper'>
      <div className='calendarWrap'>
        <span>Период с</span>
        <input
          value={`${format(range[0].startDate, 'dd.MM.yyyy')}`}
          readOnly
          type='text'
          className='inputBox'
          onClick={() => setOpen((open) => !open)}
        />
        <span> - </span>
        <input
          value={`${format(range[0].endDate, 'dd.MM.yyyy')}`}
          readOnly
          type='text'
          className='inputBox'
          onClick={() => setOpen((open) => !open)}
        />
        <div ref={refOne}>
          {open && (
            <DateRange
              onChange={handleChange}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction='horizontal'
              locale={ru}
              className='calendarElement'
              minDate={addDays(new Date(), -60)}
              maxDate={addDays(new Date(), 0)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
