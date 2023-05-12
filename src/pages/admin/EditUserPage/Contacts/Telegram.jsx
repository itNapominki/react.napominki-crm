import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { useInitial } from 'hooks'

export default function Telegram() {
  const { initial } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'messengers.telegram', '')

  return (
    <AdminForm.Control
      type="text"
      label="Telegram"
      name="messengers.telegram"
      value={value}
      onInput={setValue}
      className="col col-6"
    />
  )
}
