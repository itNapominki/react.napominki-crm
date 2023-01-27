import React from 'react'

import { AdminForm } from 'components'
import { Email, Fullname, Password, Phone, Role } from './components'

export default function EditUser() {
  return (
    <AdminForm.Group>
      <Role />
      <Fullname />
      <Email />
      <Phone />
      <Password />
    </AdminForm.Group>
  )
}
