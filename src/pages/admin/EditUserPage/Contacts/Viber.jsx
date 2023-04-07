import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Viber() {
  const { initial } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'messengers.viber', '')

  return (
    <AdminForm.Control
      type="tel"
      label="Viber"
      name="messengers.viber"
      value={value}
      onInput={setValue}
      className="col col-6"
    />
  )
}
