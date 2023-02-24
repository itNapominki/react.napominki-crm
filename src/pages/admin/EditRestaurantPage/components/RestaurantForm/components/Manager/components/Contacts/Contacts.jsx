import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { getChildrenErrors } from 'core/utils'

export default function Shedule() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [contacts, setContacts] = React.useState([])
  const [initialState] = useInitial(initial, 'managerInfo.contacts', [])

  React.useEffect(() => {
    setData((prev) => {
      return { ...prev, managerInfo: { ...prev.managerInfo, contacts } }
    })
  }, [contacts])

  return (
    <AdminForm.Contacts
      initial={initialState}
      onChange={setContacts}
      errors={getChildrenErrors(errors, 'managerInfo.contacts')}
    />
  )
}
