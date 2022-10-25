import PropTypes from 'prop-types'
import { InputLabel, Select, MenuItem } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

import { useFilter } from '../../context/FilterContext'
import capitalize from '../../utils/helpers'

const SelectFilter = ({ field, data, item, setItem }) => {
  const { loading } = useFilter()
  return (<>
    <InputLabel id={`${field}-select-label`}>{field}</InputLabel>
    <Select value = {item}
              labelId={`${field}-select-label`}
              id={`${field}-select`}
              label={field}
              sx={{ width: '10vw', minWidth: 120, marginRight: 2 }}
              onChange={(event) => setItem(event.target.value)}
              defaultValue={data[0]}
            >
      {loading ? < LinearProgress/> : data.map(value => <MenuItem value={value} key={value}>{capitalize(value.split('_')[0])}</MenuItem>)}
    </Select>
  </>

  )
}

SelectFilter.propTypes = {
  field: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default SelectFilter
