import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Telegram() {
  const context = React.useContext(EditUserContext)
  const { serverData, errors, setData } = context

  const [telegram, setTelegram] = useServerData(
    serverData,
    'messengers.telegram',
    ''
  )
  const error = useErrors(errors, 'telegram')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        messengers: {
          ...prev.messengers,
          telegram,
        },
      }
    })
  }, [telegram])

  return (
    <Input
      type="tel"
      label="Telegram"
      error={error}
      value={telegram}
      onInput={setTelegram}
      className="col col-6"
    />
  )
}
