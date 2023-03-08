import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Telegram() {
  const { initial } = React.useContext(EditUserContext)

  const telegram = useInitial(initial, 'messengers.telegram', '')

  return (
    <Input
      type="tel"
      label="Telegram"
      name="messengers.telegram"
      value={telegram}
      className="col col-6"
    />
  )
}
