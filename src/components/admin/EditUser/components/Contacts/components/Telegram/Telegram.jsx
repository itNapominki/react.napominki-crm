import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function Telegram() {
  const context = React.useContext(EditUserContext)
  const { initial, errors, setData } = context

  const [telegram, setTelegram] = useInitial(initial, 'messengers.telegram', '')
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
