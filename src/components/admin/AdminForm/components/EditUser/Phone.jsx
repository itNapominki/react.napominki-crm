import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors } from 'hooks'

export default function Phone() {
  const context = React.useContext(EditUserContext)
  const { errors, setData } = context

  const [phone, setPhone] = React.useState('')
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
      className="col col-6 "
    />
  )
}
