import React from 'react'
import { AdminForm } from 'components/admin'
import {
  handleAdd,
  handleSelectChange,
  handleInput,
  handleRemove,
} from './handlers'
import { SheduleItem } from './components'

export default function Shedule({
  buttonText = 'Добавить расписание',
  onChange,
  title,
  errors,
  initial,
}) {
  console.log('Render Shedule')

  const [shedule, setShedule] = React.useState(initial)

  React.useEffect(() => onChange(shedule), [shedule])
  React.useEffect(() => setShedule(initial), [initial])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setShedule) }}
    >
      {shedule?.map((item, i) => (
        <div key={i} className="col col-4">
          <SheduleItem
            item={item}
            onSelectChange={(arr) => handleSelectChange(setShedule, arr, i)}
            onInput={(value) => handleInput(setShedule, value, i)}
            onRemove={() => handleRemove(setShedule, i)}
            errors={{ array: errors, param: i }}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
