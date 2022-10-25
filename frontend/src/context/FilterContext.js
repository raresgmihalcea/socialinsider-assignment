import dayjs from 'dayjs'
import { createContext, useContext, useState } from 'react'

const FilterContext = createContext()
const FilterUpdateContext = createContext()

export const useFilter = () => {
  return useContext(FilterContext)
}

export const useFilterUpdate = () => {
  return useContext(FilterUpdateContext)
}

export const FilterProvider = ({ children }) => {
  const [brandData, setBrandData] = useState([])
  const [brand, setBrand] = useState('')
  const [profile, setProfile] = useState('')
  const [from, setFrom] = useState(dayjs().subtract(1, 'month'))
  const [to, setTo] = useState(dayjs())
  const [loading, setLoading] = useState(true)

  const providerValue = { brandData, brand, profile, from, to, loading }
  const updateProviderValue = { setBrandData, setBrand, setProfile, setFrom, setTo, setLoading }
  return (
    <>
      <FilterContext.Provider value={providerValue}>
        <FilterUpdateContext.Provider value={updateProviderValue}>
          {children}
        </FilterUpdateContext.Provider>
      </FilterContext.Provider>
    </>
  )
}
