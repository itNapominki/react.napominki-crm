import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'

export default function WhatsApp() {
  const { initial } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'messengers.whatsapp', '')

  return (
    <AdminForm.Control
      type="tel"
      label="WhatsApp"
      name="messengers.whatsapp"
      value={value}
      onInput={setValue}
      className="col col-6"
    />
  )
}
