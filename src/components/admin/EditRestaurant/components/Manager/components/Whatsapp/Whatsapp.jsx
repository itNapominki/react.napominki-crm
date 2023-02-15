import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function Whatsapp() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, errors, setData } = context

  const error = useErrors(errors, 'managerInfo.whatsapp')
  const [whatsapp, setWhatsapp] = useInitial(
    initial,
    'managerInfo.whatsapp',
    ''
  )

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        managerInfo: {
          ...prev.managerInfo,
          whatsapp,
        },
      }
    })
  }, [whatsapp])

  return (
    <AdminForm.Group title="Группа в WhatsApp">
      <Input
        error={error}
        value={whatsapp}
        onInput={setWhatsapp}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
