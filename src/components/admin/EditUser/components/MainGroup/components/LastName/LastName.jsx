import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'core/hooks'

export default function LastName() {
  const context = React.useContext(EditUserContext)
  const { initial, setData, errors } = context

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
