import React from 'react'
import { AdminForm } from 'components'
import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'context'

export default function IdFromGoogleShets() {

const { initial, errors } = React.useContext(EditRestaurantContext)

 const [value, setValue] = useInitial(initial, 'idFromCompany')
  const error = useErrors(errors, 'idFromCompany')

  return (
    <AdminForm.Control
      label={{ text: 'ID (операционная таблица)', size: 'big' }}
      name="idFromCompany"
      value={value}
      onInput={setValue}
      error={error}
      className="col col-4"
    />
  )
}
