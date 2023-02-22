import React from 'react'
import { Input } from 'components'
import { useInitial, useErrors } from 'hooks'

export default function Coordinates({ address, initial, setAddress, errors }) {
  const [coordinates, setCoordinates] = useInitial(initial, 'coordinates', '')
  const error = useErrors(errors, 'coordinates')

  React.useEffect(() => {
    setAddress((prev) => {
      return { ...prev, coordinates }
    })
  }, [coordinates])

  function handleOpenMap() {
    const url = 'https://yandex.ru/maps/?text={' + address + '}'
    return window.open(url, '_blank')
  }

  return (
    <Input
      label="Координаты"
      error={error}
      value={coordinates}
      onInput={setCoordinates}
      className="col col-4"
      mask={['99.999999, 99.999999']}
      action={{
        text: 'Открыть карту',
        onClick: handleOpenMap,
      }}
    />
  )
}
