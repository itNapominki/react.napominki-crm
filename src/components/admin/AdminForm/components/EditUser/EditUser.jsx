import React from 'react'

import { AdminForm } from 'components'
import { Email, Fullname, Password, Phone, Roles } from '.'

export default function EditUser() {
  return (
    <AdminForm.Group>
      <Roles />
      <Fullname />
      <Email />
      <Phone />
      <Password />
    </AdminForm.Group>
  )
}
