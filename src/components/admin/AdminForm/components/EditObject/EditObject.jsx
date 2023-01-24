import React from 'react'
import { AdminForm } from 'components'
import { Address, Title, Type } from './components'

export default function EditObject() {
  return (
    <React.Fragment>
      <AdminForm.Group>
        <Type />
        <Title />
      </AdminForm.Group>
      <AdminForm.Group>
        <Address />
      </AdminForm.Group>
    </React.Fragment>
  )
}
