import React from 'react'
import { AdminForm } from 'components'
import { Email, Password } from '.'

export default function Auth() {
  return (
    <AdminForm.Group title="Авторизация">
      <Email />
      <Password />
    </AdminForm.Group>
  )
}
