import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components'
import { useOptions } from './hooks'
import { useErrors } from 'hooks'

import styles from './Menu.module.scss'

export default function Menu({
  name,
  menu,
  options,
  errors,
  handleInput,
  handleFileChange,
  handleRemove,
}) {
  const [droplist] = useOptions(options)
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const fileError = useErrors(errors, name + '.file.path')

  return (
    <div className={styles.item}>
      <DottedButton
        className={styles.burger}
        onClick={() => setDroplistVisible(!droplistVisible)}
      />
      {droplistVisible && (
        <Droplist
          visible={droplistVisible}
          setVisible={setDroplistVisible}
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
        <Select
          label="Файл"
          name={name + '.file'}
          value={{
            text: menu.file.title,
            value: menu.file,
          }}
          error={fileError}
          onChange={({ value }) => handleFileChange(value)}
          options={droplist}
          className="col col-6"
        />
        <Input
          type="number"
          label="Депозит от, руб."
          name={name + '.deposit'}
          value={menu.deposit}
          onInput={(value) => handleInput('deposit', value)}
          className="col col-3"
        />
        <Input
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
