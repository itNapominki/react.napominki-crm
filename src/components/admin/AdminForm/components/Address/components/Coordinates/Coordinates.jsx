import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'
import { useString } from './hooks'

export default function Coordinates(data) {
  const { address, initialState, setAddress, errors } = data

  const [coordinates, setCoordinates] = React.useState('')
  const string = useString(address)
  const error = useErrors(errors, 'address.coordinates')

  React.useEffect(
    () => setCoordinates(initialState.coordinates),
    [initialState]
  )

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
      mask={['99.999999, 99.999999']}
      action={{
        text: 'Открыть карту',
        onClick: handleOpenMap,
      }}
    />
  )
}
