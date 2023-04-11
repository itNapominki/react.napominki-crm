import React from 'react'

import { DottedButton, Droplist, AdminForm } from 'components'

import { useErrors } from 'hooks'

import styles from './Menus.module.scss'

export default function Menu({
  name,
  menu,
  options,
  errors,
  handleInput,
  handleFileChange,
  handleRemove,
}) {
  const [opened, setOpened] = React.useState(false)
  const error = useErrors(errors, name + '.id')

  return (
    <div className={styles.item}>
      <DottedButton
        className={styles.burger}
        onClick={() => setOpened(!opened)}
      />
      {opened && (
        <Droplist
          visible={opened}
          setVisible={setOpened}
          items={[
            {
              text: 'Удалить',
              color: 'red',
              onClick: handleRemove,
            },
          ]}
          className={styles.droplist}
        />
      )}
      <div className="row">
        <AdminForm.Control
          type="SELECT"
          label="Файл"
          name={name + '.id'}
          value={menu.id || ''}
          error={error}
          onChange={(id) => handleFileChange(id)}
          options={options}
          className="col col-6"
        />
        <AdminForm.Control
          type="number"
          label="Депозит от, руб."
          name={name + '.deposit'}
          value={menu.deposit}
          onInput={(value) => handleInput('deposit', value)}
          className="col col-3"
        />
        <AdminForm.Control
          type="number"
          label="Посадка от, чел."
          name={name + '.persons'}
          value={menu.persons}
          onInput={(value) => handleInput('persons', value)}
          className="col col-3"
        />
      </div>
    </div>
  )
}
