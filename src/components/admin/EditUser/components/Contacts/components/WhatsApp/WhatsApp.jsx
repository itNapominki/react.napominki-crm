import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function WhatsApp() {
  const context = React.useContext(EditUserContext)
  const { serverData, errors, setData } = context

  const [whatsapp, setWhatsApp] = useServerData(
    serverData,
    'messengers.whatsapp',
    ''
  )
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
