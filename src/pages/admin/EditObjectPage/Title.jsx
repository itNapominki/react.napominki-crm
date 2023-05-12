import React from 'react'
import { AdminForm } from 'components'
import { EditObjectContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function Title() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditObjectContext)

  const [value, setValue] = useInitial(initial, 'title', '')
  const error = useErrors(errors, 'title')

  return (
    <AdminForm.Control
      type="text"
      label="Название объекта"
      name="title"
      value={value}
      onInput={setValue}
      error={error}
      className="col col-12"
    />
  )
}
