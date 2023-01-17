import React from 'react'
import { Select } from 'components'
import { convertServerData } from '../utils'
import { useSelectChange } from '../hooks'

export default function Selects(data) {
  const { serverData, setSelectsValues } = data

  const [loaded, setLoaded] = React.useState(false)
  const [regions, setRegions] = React.useState([])

  const [region, setRegion] = React.useState({ id: null, text: '', value: '' })
  const [city, setCity] = React.useState(null)
  const [county, setCounty] = React.useState(null)
  const [district, setDistrict] = React.useState(null)

  const [cities] = useSelectChange(region, 'cities', setCity, serverData)
  const [counties] = useSelectChange(city, 'counties', setCounty, serverData)
  const [districts] = useSelectChange(
    county,
    'districts',
    setDistrict,
    serverData
  )

  const updateDependencies = [region, city, county, district]

  React.useEffect(() => {
    return setSelectsValues(updateDependencies)
  }, updateDependencies)

  React.useEffect(() => {
    if (serverData && !loaded) {
      const regions = convertServerData(serverData.regions)

      setRegions(regions)
      setRegion(regions[0])

      setLoaded(true)
    }
  }, [serverData])

  return (
    <React.Fragment>
      <Select
        label="Регион"
        value={region}
        options={regions}
        onChange={setRegion}
        className="col col-4"
      />
      {cities && (
        <Select
          label="Город"
          value={city}
          options={cities}
          onChange={setCity}
          className="col col-4"
        />
      )}
      {counties && (
        <Select
          label="Округ"
          value={county}
          options={counties}
          onChange={setCounty}
          className="col col-4"
        />
      )}
      {districts && (
        <Select
          label="Район"
          value={district}
          options={districts}
          onChange={setDistrict}
          className="col col-4"
        />
      )}
    </React.Fragment>
  )
}
