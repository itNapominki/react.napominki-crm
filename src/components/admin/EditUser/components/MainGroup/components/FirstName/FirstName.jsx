import React from 'react'
import { AdminForm, Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function FirstName() {
  const context = React.useContext(EditUserContext)
  const { serverData, setData, errors } = context

  const [firstName, setFirstName] = useServerData(serverData, 'firstName', '')
  const error = useErrors(errors, 'firstName')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        firstName,
      }
    })
  }, [firstName])

  return (
    <React.Fragment>
      <Input
        label="Имя"
        error={error}
        value={firstName}
        onInput={setFirstName}
        className="col col-6 "
      />
    </React.Fragment>
  )
}
