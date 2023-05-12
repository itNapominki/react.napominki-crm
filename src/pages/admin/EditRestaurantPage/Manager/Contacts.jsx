import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [contacts, setContacts] = useInitial(
    initial,
    'managerInfo.contacts',
    []
  )

  return (
    <AdminForm.Contacts
      contacts={contacts}
      setContacts={setContacts}
      errors={errors}
      name="managerInfo.contacts"
    />
  )
}
