import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function Whatsapp() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const error = useErrors(errors, 'managerInfo.whatsapp')
  const [value, setValue] = useInitial(initial, 'managerInfo.whatsapp', '')

  return (
    <AdminForm.Group title="Группа в WhatsApp">
      <AdminForm.Control
        name="managerInfo.whatsapp"
        value={value}
        onInput={setValue}
        error={error}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
