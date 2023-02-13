import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Email() {
  const context = React.useContext(EditUserContext)
  const { serverData, errors, setData } = context

  const [email, setEmail] = useServerData(serverData, 'email', '')
  const error = useErrors(errors, 'email')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        email,
      }
    })
  }, [email])

  return (
    <Input
      type="email"
      label="Email"
      error={error}
      value={email}
      onInput={setEmail}
      className="col col-12 "
    />
  )
}
