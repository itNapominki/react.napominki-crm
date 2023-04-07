import React from 'react'
import { AdminForm } from 'components'
import {
  handleAdd,
  handleInput,
  handleRemove,
  handleSelectChange,
} from './handlers'
import { SheduleItem } from './components'
import options from './components/SheduleItem/options'

export default function Shedule({
  buttonText = 'Добавить расписание',
  title,
  errors,
  initial,
  name,
}) {
  console.log('Render Shedule')

  const [shedule, setShedule] = React.useState(initial)

  React.useEffect(() => {
    if (initial) {
      setShedule(
        initial.map((item) => ({
          ...item,
          days: options.filter(({ value }) =>
            item.days.find((day) => day === value)
          ),
        }))
      )
    }
  }, [initial])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setShedule) }}
    >
      {shedule?.map((item, i) => (
        <div key={i} className="col col-4">
          <SheduleItem
            item={item}
            name={`${name}[${i}]`}
            onRemove={() => handleRemove(setShedule, i)}
            onSelectChange={(array) => handleSelectChange(setShedule, array, i)}
            onInput={(value) => handleInput(setShedule, value, i)}
            errors={errors}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
