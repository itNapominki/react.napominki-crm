import React from 'react'
import { AdminForm, Input } from 'components'
import { useErrors } from 'hooks'

export default function MainGroup({
  title,
  boarding,
  fit,
  errors,
  name,
  onInput,
}) {
  const titleError = useErrors(errors, name + `.title`)
  const boardingError = useErrors(errors, name + `.boarding`)
  const fitError = useErrors(errors, name + `.fit`)

  return (
    <AdminForm.Group>
      <Input
        label="Название зала"
        bigLabel
        name={name + '.title'}
        value={title}
        error={titleError}
        onInput={(value) => onInput('title', value)}
        className="col col-4"
      />
      <Input
        type="number"
        label="Посадка от, чел."
        bigLabel
        name={name + '.boarding'}
        value={boarding}
        error={boardingError}
        onInput={(value) => onInput('boarding', value)}
        className="col col-4"
      />
      <Input
        type="number"
        label="Вместимость до, чел."
        bigLabel
        name={name + '.fit'}
        value={fit}
        error={fitError}
        onInput={(value) => onInput('fit', value)}
        className="col col-4"
      />
    </AdminForm.Group>
  )
}
