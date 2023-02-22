import React from 'react'
import { AdminForm } from 'components'
import { Title, Type } from './components'

export default function MainGroup() {
  return (
    <AdminForm.Group title="Основное">
      <Type />
      <Title />
    </AdminForm.Group>
  )
}
