import React from 'react'
import { AdminForm, Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function FirstName() {
  const {
    initial,
    error: { errors },
    setData,
  } = React.useContext(EditUserContext)

  const [firstName, setFirstName] = useInitial(initial, 'firstName', '')
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
