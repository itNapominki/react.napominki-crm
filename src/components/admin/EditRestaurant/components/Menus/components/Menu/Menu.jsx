import './Menu.scss'
import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components'
import { useOptions } from './hooks'
import { handleInput, handleRemove, handleSelectChange } from './utils'
import { useErrors } from 'hooks'

export default function Menu(data) {
  const { menus, options, onChange, errors, i } = data

  const [droplist] = useOptions(options)
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const [file, setFile] = React.useState({ text: '', value: {} })
  const fileError = useErrors(errors, 'menus[' + i + '].file.slug')

  React.useEffect(() => {
    setFile({ text: menus[i].file.title, value: menus[i].file })
  }, [menus[i].file])

  return (
    <div className="admin-form-menu">
      <DottedButton
        className="admin-form-menu__button"
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
          className="admin-form-menu__droplist"
        />
      )}
      <div className="admin-form-menu__row row">
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
                    file: {
                      id: value.id,
                      slug: value.slug,
                      title: value.title,
                    },
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
