import React from 'react'
import { AdminForm } from 'components/admin'
import { Item } from './components'

import { handleAdd, handleInput, handleRemove } from './handlers'

export default function Inputlist({
  buttonText = 'Добавить',
  title,
  onChange,
  errors,
  initial,
}) {
  const [list, setList] = React.useState(initial)

  React.useEffect(() => onChange(list), [list])
  React.useEffect(() => setList(initial), [initial])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setList) }}
    >
      {list?.map((text, i) => {
        return (
          <div key={i} className="col col-4">
            <Item
              text={text}
              handleInput={(value) => handleInput(setList, value, i)}
              handleRemove={() => handleRemove(setList, i)}
              errors={{ array: errors, param: i.toString() }}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
