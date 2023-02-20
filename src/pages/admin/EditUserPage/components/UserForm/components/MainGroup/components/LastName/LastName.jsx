import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function LastName() {
  const {
    initial,
    error: { errors },
    setData,
  } = React.useContext(EditUserContext)

  const [lastName, setLastName] = useInitial(initial, 'lastName', '')

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
