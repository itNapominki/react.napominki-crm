import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Fullname() {
  const context = React.useContext(EditUserContext)
  const { serverData, setData, errors } = context

  const [firstName, setFirstName] = useServerData(serverData, 'firstName', '')
  const [lastName, setLastName] = useServerData(serverData, 'lastName', '')

  const firstNameError = useErrors(errors, 'firstName')
  const lastNameError = useErrors(errors, 'lastName')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        firstName,
        lastName,
      }
    })
  }, [firstName, lastName])

  return (
    <React.Fragment>
      <Input
        label="Имя"
        error={firstNameError}
        value={firstName}
        onInput={setFirstName}
        className="col col-6 "
      />
      <Input
        label="Фамилия"
        error={lastNameError}
        value={lastName}
        onInput={setLastName}
        className="col col-6 "
      />
    </React.Fragment>
  )
}
