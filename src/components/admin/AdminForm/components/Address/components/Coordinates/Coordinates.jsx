import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'
import { useString } from './hooks'

export default function Coordinates(data) {
  const [coordinates, setCoordinates] = React.useState('')
  const { address, setAddress, errors } = data

  const string = useString(address)
  const error = useErrors(errors, 'address.coordinates')

  React.useEffect(() => {
    setAddress((prev) => {
      return { ...prev, coordinates }
    })
  }, [coordinates])

  function handleOpenMap() {
    const url = 'https://yandex.ru/maps/?text={' + string + '}'
    return window.open(url, '_blank')
  }

  return (
    <Input
      label="Координаты"
      error={error}
      value={coordinates}
      onInput={setCoordinates}
      className="col col-4"
      action={{
        text: 'Открыть карту',
        onClick: handleOpenMap,
      }}
    />
  )
}
