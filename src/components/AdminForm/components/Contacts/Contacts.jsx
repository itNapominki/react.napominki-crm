import './Contacts.scss'
import React from 'react'
import { AdminForm } from 'components'
import { ContactsItem } from './components'
import { handleAdd, handleInput, handleRemove } from './handlers'

export default function Contacts({
  buttonText = 'Добавить контакт',
  title = 'Контакты',
  errors,
  initial,
  name,
}) {
  const [contacts, setContacts] = React.useState([])
  React.useEffect(() => setContacts(initial), [initial])

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
              name={`${name}[${i}]`}
              contact={contact}
              setContacts={setContacts}
              errors={errors}
              handleInput={onInput}
              handleRemove={() => handleRemove(setContacts, i)}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
