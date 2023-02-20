import './Inputlist.scss'

import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm, Input } from 'components'
import { useErrors } from 'hooks'
import { handleAdd, handleInput, handleRemove } from './utils'
import removeIcon from 'assets/sprites/remove.svg'

export default function Inputlist(data) {
  const {
    buttonText = 'Добавить',
    title,
    onChange,
    errors,
    formName,
    initialState,
  } = data
  const [list, setList] = React.useState(initialState)

  React.useEffect(() => onChange(list), [list])
  React.useEffect(() => setList(initialState), [initialState])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setList) }}
    >
      {list?.map((_, i) => {
        const error = useErrors(errors, formName + '[' + i + ']')

        return (
          <div key={i} className="col col-4">
            <div className="admin-form-inputlist">
              <div
                className="admin-form-inputlist__remove"
                onClick={() => handleRemove(setList, i)}
              >
                <HandySvg src={removeIcon} />
              </div>
              <Input
                value={list[i]}
                error={error}
                errorDown
                onInput={(value) => handleInput(setList, value, i)}
              />
            </div>
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
