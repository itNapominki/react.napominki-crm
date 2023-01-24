import React from 'react'
import { Select } from 'components'
import { convertServerData } from './utils'
import { useSelectChange } from './hooks'
import { useFetch } from 'hooks'

export default function Selects(data) {
  const locations = useFetch('/addresses')
  const { location, setLocation } = data

  const [loaded, setLoaded] = React.useState(false)

  const [region, setRegion] = React.useState({ text: '', value: '' })
  const [city, setCity] = React.useState(null)
  const [county, setCounty] = React.useState(null)
  const [district, setDistrict] = React.useState(null)

  const [regions, setRegions] = React.useState([])
  const [cities] = useSelectChange(region, 'cities', setCity, locations)
  const [counties] = useSelectChange(city, 'counties', setCounty, locations)
  const [districts] = useSelectChange(
    county,
    'districts',
    setDistrict,
    locations
  )

  React.useEffect(() => {
    if (location) {
      if (location.region) {
        if (location.region.id != undefined) {
          const regions = convertServerData(locations.regions)
          setRegion(regions[location.region.id])
        }
      }

      if (location.city) {
        if (location.city.id != undefined) {
          const cities = convertServerData(locations.cities)
          setCity(cities[location.city.id])
        }
      }

      if (location.county) {
        if (location.county.id != undefined) {
          const counties = convertServerData(locations.counties)
          setCounty(counties[location.county.id])
        }
      }

      if (location.district) {
        if (location.district.id != undefined) {
          const districts = convertServerData(locations.districts)
          setDistrict(districts[location.district.id])
        }
      }
    }
  }, [location])

  return console.log(region, city, county, district)
  React.useEffect(() => {
    if (locations && !loaded) {
      const regions = convertServerData(locations.regions)

      setRegions(regions)
      setRegion(regions[0])

      setLoaded(true)
    }
  }, [locations])

  const updateDependencies = [region, city, county, district]

  React.useEffect(() => {
    const arr = updateDependencies.map((elem) => {
      if (elem) {
        return {
          id: elem.value.id,
          title: elem.value.title,
          slug: elem.value.slug,
        }
      }

      return null
    })

    return setLocation({
      region: arr[0],
      city: arr[1],
      county: arr[2],
      district: arr[3],
    })
  }, updateDependencies)

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
