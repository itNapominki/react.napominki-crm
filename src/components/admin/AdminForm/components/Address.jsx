import React from 'react'
import { AdminForm, Input, Select } from '../../..'

export default function Address(data) {
  const { address, setAddress } = data

  const [region, setRegion] = React.useState(address.region)
  const [city, setCity] = React.useState(address.city)
  const [county, setCounty] = React.useState(address.county)
  const [district, setDistrict] = React.useState(address.district)
  const [street, setStreet] = React.useState(address.street)
  const [house, setHouse] = React.useState(address.house)
  const [floor, setFloor] = React.useState(address.floor)
  const [coordinates, setCoordinates] = React.useState(address.coordinates)

  const handleRegionChange = (value) => setRegion(value)
  const handleCityChange = (value) => setCity(value)
  const handleCountyChange = (value) => setCounty(value)
  const handleDistrictChange = (value) => setDistrict(value)
  const handleStreetInput = (value) => setStreet(value)
  const handleHouseInput = (value) => setHouse(value)
  const handleFloorInput = (value) => setFloor(value)
  const handleCoordinatesInput = (value) => setCoordinates(value)

  function handleOpenMap() {
    const { coordinates, floor, ...obj } = address
    const string = Object.values(obj).join(', ')
    const url = 'https://yandex.ru/maps/?text={' + string + '}'

    return window.open(url, '_blank')
  }

  React.useEffect(() => {
    setAddress({
      region,
      city,
      county,
      district,
      street,
      house,
      floor,
      coordinates,
    })
  }, [region, city, county, district, street, house, floor, coordinates])

  return (
    <AdminForm.Group>
      <Select
        label="Регион"
        value={region}
        options={[{ text: 'Москва и МО' }]}
        onChange={handleRegionChange}
        className="col col-4"
      />
      <Select
        label={'Город'}
        value={city}
        options={[
          { text: 'Москва' },
          { text: 'Королёв' },
          { text: 'Балашиха' },
        ]}
        onChange={handleCityChange}
        className="col col-4"
      />
      <Select
        label="Округ"
        value={county}
        options={[{ text: 'ЦАО' }, { text: 'САО' }]}
        onChange={handleCountyChange}
        className="col col-4"
      />
      <Select
        label="Район"
        value={district}
        options={[{ text: 'ЦАО' }, { text: 'САО' }]}
        onChange={handleDistrictChange}
        className="col col-4"
      />
      <Input
        type="text"
        label="Улица"
        value={street}
        onInput={handleStreetInput}
        className="col col-4"
      />
      <Input
        type="text"
        label="Дом, корпус, литер"
        value={house}
        onInput={handleHouseInput}
        className="col col-4"
      />
      <Input
        type="number"
        label="Этаж"
        value={floor}
        onInput={handleFloorInput}
        className="col col-4"
      />
      <Input
        type="text"
        label="Координаты"
        value={coordinates}
        onInput={handleCoordinatesInput}
        mask="99.999999, 99.999999"
        action={{
          text: 'Открыть карту',
          onClick: handleOpenMap,
        }}
        className="col col-4"
      />
    </AdminForm.Group>
  )
}
