import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const contacts = useInitial(initial, 'managerInfo.contacts', [])

  return (
    <AdminForm.Contacts
      initial={contacts}
      errors={errors}
      name="managerInfo.contacts"
    />
  )
}
