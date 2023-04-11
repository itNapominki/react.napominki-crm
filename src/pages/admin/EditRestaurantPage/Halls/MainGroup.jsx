import React from 'react'
import { AdminForm } from 'components'
import { useErrors } from 'hooks'

export default function MainGroup({
  title = '',
  boarding = '',
  fit = '',
  errors,
  name,
  onInput,
}) {
  const titleError = useErrors(errors, name + `.title`)
  const boardingError = useErrors(errors, name + `.boarding`)
  const fitError = useErrors(errors, name + `.fit`)

  return (
    <AdminForm.Group>
      <AdminForm.Control
        label={{ text: 'Название зала', size: 'big' }}
        name={name + '.title'}
        value={title}
        error={{ text: titleError, down: true }}
        onInput={(value) => onInput('title', value)}
        className="col col-4"
      />
      <AdminForm.Control
        type="number"
        label={{ text: 'Посадка от, чел.', size: 'big' }}
        name={name + '.boarding'}
        value={boarding}
        error={{ text: boardingError, down: true }}
        onInput={(value) => onInput('boarding', value)}
        className="col col-4"
      />
      <AdminForm.Control
        type="number"
        label={{ text: 'Вместимость до, чел.', size: 'big' }}
        name={name + '.fit'}
        value={fit}
        error={{ text: fitError, down: true }}
        onInput={(value) => onInput('fit', value)}
        className="col col-4"
      />
    </AdminForm.Group>
  )
}
