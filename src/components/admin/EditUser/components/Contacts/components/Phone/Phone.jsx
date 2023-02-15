import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function Phone() {
  const context = React.useContext(EditUserContext)
  const { initial, errors, setData } = context

  const [phone, setPhone] = useInitial(initial, 'phone', '')
  const error = useErrors(errors, 'phone')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        phone,
      }
    })
  }, [phone])

  return (
    <Input
      type="tel"
      label="Телефон"
      error={error}
      value={phone}
      onInput={setPhone}
      className="col col-6"
      mask={['8 (999) 999 99-99']}
    />
  )
}
