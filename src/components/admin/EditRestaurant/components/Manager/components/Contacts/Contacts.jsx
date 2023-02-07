import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [contacts, setContacts] = React.useState([])
  const [initialState] = useServerData(serverData, 'managerInfo.contacts', [])

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
