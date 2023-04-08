import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Whatsapp() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const error = useErrors(errors, 'managerInfo.whatsapp')
  const whatsapp = useInitial(initial, 'managerInfo.whatsapp', '')

  return (
    <AdminForm.Group title="Группа в WhatsApp">
      <Input
        name="managerInfo.whatsapp"
        error={error}
        value={whatsapp}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
