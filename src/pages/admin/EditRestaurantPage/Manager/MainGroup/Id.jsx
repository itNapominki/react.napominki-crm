import React from 'react'
import { AdminForm } from 'components'
import { useErrors } from 'hooks'
import { EditRestaurantContext } from 'context'

export default function Id() {
  const {
    id,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [value, setValue] = React.useState(id || '')
  const error = useErrors(errors, 'id')

  React.useEffect(() => {
    if (id) {
      setValue(id)
    }
  }, [id])

  return (
    <AdminForm.Control
      label={{ text: 'ID заведения', size: 'big' }}
      name="id"
      value={value}
      onInput={setValue}
      error={error}
      className="col col-4"
    />
  )
}
