import React from 'react'
import { Input } from 'components'

export default function Inputs(data) {
  const { initialAddress, addressString, showFloor, setInputsValue } = data

  const [inputsObj, setInputsObj] = React.useState({})

  const [street, setStreet] = React.useState('')
  const [house, setHouse] = React.useState('')
  const [floor, setFloor] = React.useState(showFloor ? '' : null)
  const [coordinates, setCoordinates] = React.useState('')

  React.useEffect(() => {
    if (initialAddress !== null) {
      const { street, house, floor, coordinates } = initialAddress

      setStreet(street)
      setHouse(house)
      setFloor(floor)
      setCoordinates(coordinates)
    }
  }, [initialAddress])

  React.useEffect(() => {
    setInputsObj((prev) => {
      return { ...prev, street }
    })
  }, [street])

  React.useEffect(() => {
    setInputsObj((prev) => {
      return { ...prev, house }
    })
  }, [house])

  React.useEffect(() => {
    setInputsObj((prev) => {
      return { ...prev, floor }
    })
  }, [floor])

  React.useEffect(() => {
    setInputsObj((prev) => {
      return { ...prev, coordinates }
    })
  }, [coordinates])

  React.useEffect(() => {
    setInputsValue(inputsObj)
  }, [inputsObj])

  function handleOpenMap() {
    const url = 'https://yandex.ru/maps/?text={' + addressString + '}'
    return window.open(url, '_blank')
  }

  return (
    <React.Fragment>
      <Input
        type="text"
        label="Улица"
        value={street}
        onInput={setStreet}
        className="col col-4"
      />
      <Input
        type="text"
        label="Дом, корпус, литер"
        value={house}
        onInput={setHouse}
        className="col col-4"
      />
      {showFloor && (
        <Input
          type="number"
          label="Этаж"
          value={floor ? floor : ''}
          onInput={setFloor}
          className="col col-4"
        />
      )}
      <Input
        type="text"
        label="Координаты"
        value={coordinates}
        onInput={setCoordinates}
        mask="99.999999, 99.999999"
        action={{
          text: 'Открыть карту',
          onClick: handleOpenMap,
        }}
        className="col col-4"
      />
    </React.Fragment>
  )
}
