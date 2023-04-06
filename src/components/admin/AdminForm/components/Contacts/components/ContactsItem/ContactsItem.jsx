import styles from './ContactsItem.module.scss'
import React from 'react'
import { DottedButton, Droplist, Input } from 'components'
import { useErrors } from 'hooks'

export default function ContactsItem({
  contact,
  errors,
  handleRemove,
  handleInput,
  name,
}) {
  const [droplistVisible, setDoplistVisible] = React.useState(false)

  const fullnameError = useErrors(errors, name + '.fullname')
  const positionError = useErrors(errors, name + '.position')
  const phoneError = useErrors(errors, name + '.phone')

  return (
    <div className={styles.container}>
      <DottedButton
        className={styles.burgerButton}
        onClick={() => setDoplistVisible(!droplistVisible)}
      />
      {droplistVisible && (
        <Droplist
          visible={droplistVisible}
          className={styles.droplist}
          setVisible={setDoplistVisible}
          items={[
            {
              text: 'Удалить',
              color: 'red',
              onClick: handleRemove,
            },
          ]}
        />
      )}
      <div className="row">
        <Input
          label="Контактное лицо"
          name={name + '.fullname'}
          value={contact.fullname}
          onInput={(value) => handleInput('fullname', value)}
          className="col col-4"
          error={fullnameError}
        />
        <Input
          label="Должность"
          name={name + '.position'}
          value={contact.position}
          onInput={(value) => handleInput('position', value)}
          className="col col-4"
          error={positionError}
        />
        <Input
          label="Телефон"
          name={name + '.phone'}
          value={contact.phone}
          onInput={(value) => handleInput('phone', value)}
          mask={['8 (999) 999 99-99']}
          className="col col-4"
          error={phoneError}
        />
      </div>
    </div>
  )
}
