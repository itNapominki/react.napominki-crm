import React from 'react'
import { AdminForm } from 'components'
import { Item } from './components'

import { handleAdd, handleInput, handleRemove } from './handlers'

export default function Inputlist({
  buttonText = 'Добавить',
  title,
  errors,
  initial,
  name,
}) {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    if (initial) {
      setList(initial)
    }
  }, [initial])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setList) }}
    >
      {list?.map((text, i) => {
        return (
          <div key={i} className="col col-4">
            <Item
              name={`${name}[${i}]`}
              text={text}
              handleInput={(value) => handleInput(setList, value, i)}
              handleRemove={() => handleRemove(setList, i)}
              errors={errors}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
