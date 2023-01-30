import React from 'react'
import { AdminForm } from 'components'
import { handleAdd } from './utils'
import { SheduleItem } from './components'

export default function Shedule(data) {
  console.log('Render Shedule')

  const {
    buttonText = 'Добавить расписание',
    onChange,
    title,
    errors,
    formName,
    initialState,
  } = data

  const [shedule, setShedule] = React.useState(initialState)

  React.useEffect(() => onChange(shedule), [shedule])
  React.useEffect(() => setShedule(initialState), [initialState])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setShedule) }}
    >
      {shedule?.map((_, i) => (
        <div key={i} className="col col-4">
          <SheduleItem
            i={i}
            shedule={shedule}
            setShedule={setShedule}
            errors={errors}
            formName={formName}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
