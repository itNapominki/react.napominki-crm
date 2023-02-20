import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Viber() {
  const {
    initial,
    error: { errors },
    setData,
  } = React.useContext(EditUserContext)

  const [viber, setViber] = useInitial(initial, 'messengers.viber', '')
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
