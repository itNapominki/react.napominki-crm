import React from 'react'

import { GroupedSelect } from './components'

import { api } from 'core/utils'
import { MODELS } from 'core/constants'
import { useInitial } from './hooks'

export default function Location({ initial, setAddress }) {
  const [locations, setLocations] = React.useState()

  React.useEffect(() => {
    async function getData() {
      await api
        .getAll({ model: MODELS.LOCATION.VALUE })
        .then(({ data }) => setLocations(data))
    }

    getData()
  }, [])

  const {
    region,
    setRegion,
    city,
    setCity,
    county,
    setCounty,
    district,
    setDistrict,
  } = useInitial(initial)

  React.useEffect(() => {
    setAddress((prev) => {
      return {
        ...prev,
        region: region ? region.value : null,
        city: city ? city.value : null,
        county: county ? county.value : null,
        district: district ? district.value : null,
      }
    })
  }, [region, city, county, district])

  return (
    <React.Fragment>
      <GroupedSelect
        label="Регион"
        type="regions"
        value={region}
        setValue={setRegion}
        locations={locations}
      />
      <GroupedSelect
        referal={{
          instance: region,
          name: 'region',
        }}
        label="Город"
        type="cities"
        value={city}
        setValue={setCity}
        locations={locations}
      />
      <GroupedSelect
        referal={{
          instance: city,
          name: 'city',
        }}
        label="Округ"
        type="counties"
        value={county}
        setValue={setCounty}
        locations={locations}
      />
      <GroupedSelect
        referal={{
          instance: county,
          name: 'county',
        }}
        label="Район"
        type="districts"
        value={district}
        setValue={setDistrict}
        locations={locations}
      />
    </React.Fragment>
  )
}
