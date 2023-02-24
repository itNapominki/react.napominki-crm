import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components'
import { useOptions } from './hooks'
import { useErrors } from 'hooks'

import styles from './Menu.module.scss'

export default function Menu({
  menu,
  options,
  errors,
  handleInput,
  handleFileChange,
  handleRemove,
}) {
  const [droplist] = useOptions(options)
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const fileError = useErrors(errors.array, `[${errors.param}].path`)

  return (
    <div className={styles.item}>
      <DottedButton
        className={styles.burger}
        onClick={() => setDroplistVisible(!droplistVisible)}
      />
      {droplistVisible && (
        <Droplist
          visible={droplistVisible}
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
          value={{
            text: menu.title,
            value: {
              id: menu.id,
              title: menu.title,
              path: menu.path,
            },
          }}
          error={fileError}
          onChange={({ value }) => handleFileChange(value)}
          options={droplist}
          className="col col-6"
        />
        <Input
          label="Депозит от, руб."
          value={menu.deposit}
          onInput={(value) => handleInput('deposit', +value)}
          className="col col-3"
        />
        <Input
          label="Посадка от, чел."
          value={menu.persons}
          onInput={(value) => handleInput('persons', +value)}
          className="col col-3"
        />
      </div>
    </div>
  )
}
