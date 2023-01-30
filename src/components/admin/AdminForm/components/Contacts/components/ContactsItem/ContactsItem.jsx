import React from 'react'
import { DottedButton, Droplist, Input } from 'components'
import { useErrors } from 'hooks'
import { handleInput, handleRemove } from '../../utils'

export default function ContactsItem(data) {
  const { contacts, setContacts, errors, formName, i } = data

  const [droplistVisible, setDoplistVisible] = React.useState(false)

  const fullnameError = useErrors(errors, formName + '[' + i + '].fullname')
  const positionError = useErrors(errors, formName + '[' + i + '].position')
  const phoneError = useErrors(errors, formName + '[' + i + '].phone')

  return (
    <div className="admin-form-contacts__item">
      <DottedButton
        className="admin-form-contacts__item-button"
        onClick={() => setDoplistVisible(!droplistVisible)}
      />
      {droplistVisible && (
        <Droplist
          visible={droplistVisible}
          className="admin-form-contacts__item-droplist"
          items={[
            {
              text: 'Удалить',
              color: 'red',
              onClick: () => handleRemove(setContacts, i),
            },
          ]}
        />
      )}
      <div className="admin-form-contacts__item-row row">
        <Input
          label="Контактное лицо"
          value={contacts[i].fullname}
          onInput={(value) => handleInput(setContacts, 'fullname', value, i)}
          className="admin-form-contacts__input col col-4"
          error={fullnameError}
        />
        <Input
          label="Должность"
          value={contacts[i].position}
          onInput={(value) => handleInput(setContacts, 'position', value, i)}
          className="admin-form-contacts__input col col-4"
          error={positionError}
        />
        <Input
          label="Телефон"
          value={contacts[i].phone}
          onInput={(value) => handleInput(setContacts, 'phone', value, i)}
          mask={['8 (999) 999 99-99']}
          className="admin-form-contacts__input col col-4"
          error={phoneError}
        />
      </div>
    </div>
  )
}
