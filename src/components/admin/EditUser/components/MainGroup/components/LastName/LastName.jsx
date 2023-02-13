import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function LastName() {
  const context = React.useContext(EditUserContext)
  const { serverData, setData, errors } = context

  const [lastName, setLastName] = useServerData(serverData, 'lastName', '')

  const error = useErrors(errors, 'lastName')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        lastName,
      }
    })
  }, [lastName])

  return (
    <React.Fragment>
      <Input
        label="Фамилия"
        error={error}
        value={lastName}
        onInput={setLastName}
        className="col col-6 "
      />
    </React.Fragment>
  )
}
