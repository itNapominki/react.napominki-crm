import React from 'react'
import { AdminForm } from 'components/admin'
import { Input } from 'components/general'
import { EditObjectContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Address() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditObjectContext)

  const address = useInitial(initial, 'address', '')
  const point = useInitial(initial, 'point', '')

  const addressError = useErrors(errors, 'address')
  const pointError = useErrors(errors, 'coordinates')

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
        name="coordinates"
        value={point && point.coordinates.join(', ')}
        error={pointError}
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
