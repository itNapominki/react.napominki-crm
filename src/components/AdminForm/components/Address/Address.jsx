import React from 'react'
import { AdminForm } from 'components'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Address({
  address,
  setAddress,
  coordinates,
  setCoordinates,
  errors,
}) {
  console.log('render Address')

  const addressError = useErrors(errors, 'address')
  const coordinatesError = useErrors(errors, 'point.coordinates')

  function handleOpenMap() {
    const url = 'https://yandex.ru/maps/?text={' + address + '}'
    return window.open(url, '_blank')
  }

  return (
    <AdminForm.Group title="Адрес">
      <AdminForm.Control
        type="text"
        label="Адрес"
        name="address"
        value={address}
        onInput={setAddress}
        error={addressError}
        placeholder="Регион, Город, Округ, Район, Улица, Дом"
        className="col col-9"
      />
      <AdminForm.Control
        label="Координаты (XX.XXXXXX, XX.XXXXXX)"
        name="point.coordinates"
        value={
          typeof coordinates === 'string' ? coordinates : coordinates.join(', ')
        }
        onInput={setCoordinates}
        error={coordinatesError}
        // mask={['9[9][.9{1,6}], 9[9][.9{1,6}]']}
        className="col col-3"
        action={{
          text: 'Открыть карту',
          onClick: handleOpenMap,
        }}
      />
    </AdminForm.Group>
  )
}
