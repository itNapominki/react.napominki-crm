import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'context'
import { useErrors } from 'hooks'

export default function Coordinates(data) {
  const context = React.useContext(EditObjectContext)
  const { errors } = context
  const { coordinates, setCoordinates, addressString } = data

  const error = useErrors(errors, 'address.coordinates')

  function handleOpenMap() {
    const url = 'https://yandex.ru/maps/?text={' + addressString + '}'
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
