import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

  const [contacts, setContacts] = React.useState([])
  const [initialState] = useInitial(initial, 'managerInfo.contacts', [])

  React.useEffect(() => {
    setData((prev) => {
      return { ...prev, managerInfo: { ...prev.managerInfo, contacts } }
    })
  }, [contacts])

  return (
    <AdminForm.Contacts
      initialState={initialState}
      onChange={setContacts}
      formName="managerInfo.contacts"
      errors={errors}
    />
  )
}
