import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm, Input } from 'components'
import { handleAdd, handleInput, handleRemove } from './utils'
import removeIcon from 'sprites/remove.svg'

export default function Inputlist(data) {
  const { buttonText = 'Добавить', title, onChange } = data
  const [list, setList] = React.useState([])

  React.useEffect(() => onChange(list), [list])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setList) }}
    >
      {list?.map((item, i) => (
        <div key={i} className="admin-form__inputlist-item col col-4">
          <div
            className="admin-form__inputlist-remove"
            onClick={() => handleRemove(setList, i)}
          >
            <HandySvg src={removeIcon} />
          </div>
          <Input
            value={list[i]}
            onInput={(value) => handleInput(setList, value, i)}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
