import './Contacts.scss'
import React from 'react'
import { AdminForm } from 'components/admin'
import { ContactsItem } from './components'
import { handleAdd } from './utils'

export default function Contacts(data) {
  const {
    buttonText = 'Добавить контакт',
    onChange,
    title = 'Контакты',
    errors,
    formName,
    initialState,
  } = data

  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => onChange(contacts), [contacts])
  React.useEffect(() => setContacts(initialState), [initialState])

  return (
    <AdminForm.Group
      className="admin-form-contacts"
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setContacts) }}
    >
      {contacts?.map((_, i) => (
        <div key={i} className="col col-12">
          <ContactsItem
            contacts={contacts}
            setContacts={setContacts}
            errors={errors}
            formName={formName}
            i={i}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
