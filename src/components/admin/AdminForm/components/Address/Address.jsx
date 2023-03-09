import React from 'react'
import { AdminForm } from 'components/admin'
import { Input } from 'components/general'
import { useErrors } from 'hooks'

export default function Address({ address, coordinates, errors }) {
  console.log('render Address')

  const addressError = useErrors(errors, 'address')
  const coordinatesError = useErrors(errors, 'point.coordinates')

  const addressRef = React.useRef()

  function handleOpenMap() {
    const addressInput = addressRef.current.querySelector('input')
    const address = addressInput.value.replaceAll('_, ', '')

    const url = 'https://yandex.ru/maps/?text={' + address + '}'
    return window.open(url, '_blank')
  }

  return (
    <AdminForm.Group title="Адрес">
      <Input
        ref={addressRef}
        label="Адрес"
        name="address"
        value={address}
        // mask={['(*{1,20})|(i{+}), *{1,20}, *{1,20}, *{1,20}, *{1,20}, *{1,20}']}
        error={addressError}
        placeholder="Регион, Город, Округ, Район, Улица, Дом"
        className="col col-9"
      />
      <Input
        label="Координаты"
        name="point.coordinates"
        value={coordinates && coordinates.join(', ')}
        error={coordinatesError}
        mask={['9[9][.9{1,6}], 9[9][.9{1,6}]']}
        className="col col-3"
        action={{
          text: 'Открыть карту',
          onClick: handleOpenMap,
        }}
      />
    </AdminForm.Group>
  )
}
