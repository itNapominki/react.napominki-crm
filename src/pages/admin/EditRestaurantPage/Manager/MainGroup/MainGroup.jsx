import React from 'react'
import { AdminForm } from 'components'
import { Delivery, Food, Id, Prepay, Priority, Status } from '.'

export default function MainGroup() {
  return (
    <AdminForm.Group>
      <Id />
      <Status />
      <Priority />
      <Food />
      <Delivery />
      <Prepay />
    </AdminForm.Group>
  )
}
