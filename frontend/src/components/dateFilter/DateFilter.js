
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Stack } from '@mui/system'
import { useFilter, useFilterUpdate } from '../../context/FilterContext'
import TextField from '@mui/material/TextField'

const DateFilter = () => {
  const { from, to } = useFilter()
  const { setFrom, setTo } = useFilterUpdate()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" justifyContent="flex-start" spacing={2}>
        <DatePicker
          disableFuture
          label="From"
          openTo="day"
          views={['year', 'month', 'day']}
          value={from}
          onChange={(newValue) => {
            setFrom(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          disableFuture
          label="To"
          openTo="day"
          views={['year', 'month', 'day']}
          value={to}
          onChange={(newValue) => {
            setTo(newValue < from ? 'error' : newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

  )
}

export default DateFilter
