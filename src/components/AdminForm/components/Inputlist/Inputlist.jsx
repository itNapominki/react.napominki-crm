import React from 'react'
import { AdminForm } from 'components'
import { Item } from './'

import { handleAdd, handleInput, handleRemove } from './handlers'

export default function Inputlist({
  buttonText = 'Добавить',
  title,
  errors,
  info,
  setInfo,
  name,
}) {
  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setInfo) }}
    >
      {info?.map((value, i) => {
        return (
          <div key={i} className="col col-4">
            <Item
              name={`${name}[${i}]`}
              value={value}
              handleInput={(value) => handleInput(setInfo, value, i)}
              handleRemove={() => handleRemove(setInfo, i)}
              errors={errors}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
