import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Title() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditObjectContext)

  const title = useInitial(initial, 'title', '')
  const error = useErrors(errors, 'title')

  return (
    <Input
      label="Название объекта"
      name="title"
      value={title}
      error={error}
      className="col col-12"
    />
  )
}
