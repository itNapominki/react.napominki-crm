import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'

export default function WhatsApp() {
  const { initial } = React.useContext(EditUserContext)

  const whatsapp = useInitial(initial, 'messengers.whatsapp', '')

  return (
    <Input
      type="tel"
      label="WhatsApp"
      name="messengers.whatsapp"
      value={whatsapp}
      className="col col-6"
    />
  )
}
