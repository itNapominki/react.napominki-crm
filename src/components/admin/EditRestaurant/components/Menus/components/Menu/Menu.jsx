import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components'
import { useOptions } from './hooks'
import { handleInput, handleRemove } from './utils'
import { useErrors } from 'core/hooks'

import styles from './Menu.module.scss'

export default function Menu(data) {
  const { menus, options, onChange, errors, i } = data

  const [droplist] = useOptions(options)
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const [file, setFile] = React.useState({ text: '', value: {} })
  const fileError = useErrors(errors, 'menus[' + i + '].filename')

  React.useEffect(() => {
    setFile({
      text: menus[i].title,
      value: {
        id: menus[i].id,
        title: menus[i].title,
        filename: menus[i].filename,
      },
    })
  }, [menus[i]])

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
              onClick: () => handleRemove(onChange, i),
            },
          ]}
          className={styles.droplist}
        />
      )}
      <div className="row">
        <Select
          label="Файл"
          value={file}
          error={fileError}
          onChange={({ value }) =>
            onChange((prev) =>
              prev.map((elem, index) => {
                if (
                  i === index &&
                  JSON.stringify(file.value) != JSON.stringify(value)
                ) {
                  return {
                    ...elem,
                    id: value.id,
                    title: value.title,
                    filename: value.filename,
                  }
                }

                return elem
              })
            )
          }
          options={droplist}
          className="col col-6"
        />
        <Input
          label="Депозит от, руб."
          value={menus[i].deposit}
          onInput={(value) => handleInput('deposit', +value, onChange, i)}
          className="col col-3"
        />
        <Input
          label="Посадка от, чел."
          value={menus[i].persons}
          onInput={(value) => handleInput('persons', +value, onChange, i)}
          className="col col-3"
        />
      </div>
    </div>
  )
}
