import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Viber() {
  const { initial } = React.useContext(EditUserContext)

  const viber = useInitial(initial, 'messengers.viber', '')

  return (
    <Input
      type="tel"
      label="Viber"
      name="messengers.viber"
      value={viber}
      className="col col-6"
    />
  )
}
