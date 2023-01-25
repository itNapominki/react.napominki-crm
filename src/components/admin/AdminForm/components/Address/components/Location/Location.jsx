import React from 'react'
import { useFetch } from 'hooks'
import { GroupedSelect } from './components'

export default function Location(data) {
  const locations = useFetch('/addresses')
  const { context, setAddress } = data

  const [region, setRegion] = React.useState(null)
  const [city, setCity] = React.useState(null)
  const [county, setCounty] = React.useState(null)
  const [district, setDistrict] = React.useState(null)

  React.useEffect(() => {
    setAddress((prev) => {
      return {
        ...prev,
        region,
        city,
        county,
        district,
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
