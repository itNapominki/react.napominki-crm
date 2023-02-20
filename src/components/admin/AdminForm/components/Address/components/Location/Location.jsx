import React from 'react'
import { GroupedSelect } from './components'
import { api } from 'core/utils'

export default function Location({ initialState, setAddress }) {
  const [locations, setLocations] = React.useState()

  React.useEffect(() => {
    api.getAll({ model: api.model.address }).then((data) => setLocations(data))
  }, [])

  const [region, setRegion] = React.useState(null)
  const [city, setCity] = React.useState(null)
  const [county, setCounty] = React.useState(null)
  const [district, setDistrict] = React.useState(null)

  React.useEffect(() => {
    if (initialState) {
      setRegion(initialState.region)
      setCity(initialState.city)
      setCounty(initialState.county)
      setDistrict(initialState.district)
    }
  }, [initialState])

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
