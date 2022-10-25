/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useFilter, useFilterUpdate } from '../../context/FilterContext'

import FormControl from '@mui/material/FormControl'
import { FormGroup, Grid, Stack } from '@mui/material'
import DateFilter from '../dateFilter/DateFilter'
import api from '../../services/api'
import SelectFilter from '../selectFilter/SelectFilter'
import capitalize from '../../utils/helpers'

const Filter = () => {
  const { brandData, brand, profile, platformId } = useFilter()
  const { setBrandData, setBrand, setProfile, setPlatformId, setLoading } = useFilterUpdate()

  useEffect(() => {
    const getBrand = async () => {
      try {
        const res = await api.getBrands()
        setLoading(false)

        setBrandData(res.data.result)
      } catch (err) { console.log("couldn't get data:", err) }
    }
    getBrand()
  }, [])

  const getPlatforms = (name) => {
    if (brandData.length < 1) {
      return []
    }
    const data = brandData.find(el => el.brandname === name)
    return data
      ? data.profiles.map(profile => profile.profile_type)
      : []
  }

  return (
    <FormGroup >
      <Grid container >
        <Grid item xs={6} >
          <Stack direction="row" justifyContent="flex-start" spacing={2}>
            <FormControl>
              <SelectFilter field="Brand" data={brandData.map(brand => brand.brandname)} item={brand} setItem={setBrand} />
            </FormControl>
            <FormControl disabled={!brand}>
              <SelectFilter field="Platform" data={getPlatforms(brand)} item={profile} setItem={setProfile} id={platformId} setId={setPlatformId}/>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <DateFilter/>
          </FormControl>
        </Grid>
      </Grid>

    </FormGroup>

  )
}

export default Filter
