import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Viber() {
  const context = React.useContext(EditUserContext)
  const { serverData, errors, setData } = context

  const [viber, setViber] = useServerData(serverData, 'messengers.viber', '')
  const error = useErrors(errors, 'viber')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        messengers: {
          ...prev.messengers,
          viber,
        },
      }
    })
  }, [viber])

  return (
    <Input
      type="tel"
      label="Viber"
      error={error}
      value={viber}
      onInput={setViber}
      className="col col-6"
    />
  )
}
