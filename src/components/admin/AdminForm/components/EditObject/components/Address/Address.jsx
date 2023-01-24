import React from 'react'
import { Coordinates, GroupedSelect, House, Street } from './components'
import { EditObjectContext } from 'context'
import { useFetch } from 'hooks'

export default function Address() {
  const locations = useFetch('/addresses')

  const context = React.useContext(EditObjectContext)
  const { setData, serverData } = context

  const [region, setRegion] = React.useState(null)
  const [city, setCity] = React.useState(null)
  const [county, setCounty] = React.useState(null)
  const [district, setDistrict] = React.useState(null)

  const [street, setStreet] = React.useState('')
  const [house, setHouse] = React.useState('')
  const [coordinates, setCoordinates] = React.useState('')

  React.useEffect(() => {
    if (serverData) {
      const { region, city, county, district } = serverData.address

      setStreet(serverData.address.street)
      setHouse(serverData.address.house)
      setCoordinates(serverData.address.coordinates)

      if (region) {
        setRegion({
          text: serverData.address.region.title,
          value: serverData.address.region,
        })
      }

      if (city) {
        setCity({
          text: serverData.address.city.title,
          value: serverData.address.city,
        })
      }

      if (county) {
        setCounty({
          text: serverData.address.county.title,
          value: serverData.address.county,
        })
      }

      if (district) {
        setDistrict({
          text: serverData.address.district.title,
          value: serverData.address.district,
        })
      }
    }
  }, [serverData])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        address: {
          region: region ? region.value : null,
          city: city ? city.value : null,
          county: county ? county.value : null,
          district: district ? district.value : null,
          street,
          house,
          coordinates,
        },
      }
    })
  }, [region, city, county, district, street, house, coordinates])

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
      <Street street={street} setStreet={setStreet} />
      <House house={house} setHouse={setHouse} />
      <Coordinates coordinates={coordinates} setCoordinates={setCoordinates} />
    </React.Fragment>
  )
}
