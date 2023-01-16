import React from 'react'
import { AdminForm, Input } from '../../..'

export default function RestaurantName(data) {
  const { name, setName, title, setTitle } = data

  return (
    <AdminForm.Group title="Название">
      <Input
        type="text"
        className="col col-12"
        label="Название заведения"
        onInput={setName}
        value={name}
      />
      <Input
        type="text"
        className="col col-12"
        label="Заголовок карточки"
        onInput={setTitle}
        value={title}
      />
    </AdminForm.Group>
  )
}
