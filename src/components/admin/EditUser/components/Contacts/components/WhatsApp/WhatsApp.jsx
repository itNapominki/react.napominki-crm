import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function WhatsApp() {
  const context = React.useContext(EditUserContext)
  const { initial, errors, setData } = context

  const [whatsapp, setWhatsApp] = useInitial(initial, 'messengers.whatsapp', '')
  const error = useErrors(errors, 'whatsapp')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        messengers: {
          ...prev.messengers,
          whatsapp,
        },
      }
    })
  }, [whatsapp])

  return (
    <Input
      type="tel"
      label="WhatsApp"
      error={error}
      value={whatsapp}
      onInput={setWhatsApp}
      className="col col-6"
    />
  )
}
