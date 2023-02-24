import './Contacts.scss'
import React from 'react'
import { AdminForm } from 'components/admin'
import { ContactsItem } from './components'
import { handleAdd, handleInput, handleRemove } from './handlers'

export default function Contacts({
  buttonText = 'Добавить контакт',
  onChange,
  title = 'Контакты',
  errors,
  initial,
}) {
  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => onChange(contacts), [contacts])
  React.useEffect(() => setContacts(initial), [initial])

  console.log(contacts)

  return (
    <AdminForm.Group
      className="admin-form-contacts"
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setContacts) }}
    >
      {contacts?.map((contact, i) => {
        function onInput(key, value) {
          handleInput(setContacts, key, value, i)
        }

        return (
          <div key={i} className="col col-12">
            <ContactsItem
              contact={contact}
              setContacts={setContacts}
              errors={{ array: errors, param: i }}
              handleInput={onInput}
              handleRemove={() => handleRemove(setContacts, i)}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
