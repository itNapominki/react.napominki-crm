import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Whatsapp() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, errors, setData } = context

  const error = useErrors(errors, 'managerInfo.whatsapp')
  const [whatsapp, setWhatsapp] = useServerData(
    serverData,
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
