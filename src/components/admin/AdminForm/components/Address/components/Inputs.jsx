import React from 'react'
import { Input } from 'components'

export default function Inputs(data) {
  const { addressString, showFloor, setInputsValue } = data

  const [street, setStreet] = React.useState('')
  const [house, setHouse] = React.useState('')
  const [floor, setFloor] = React.useState('')
  const [coordinates, setCoordinates] = React.useState('')

  const updateDependencies = [street, house, floor, coordinates]

  React.useEffect(() => {
    setInputsValue(updateDependencies)
  }, updateDependencies)

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
          value={floor}
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
