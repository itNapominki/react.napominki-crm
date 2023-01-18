import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'context'
import { useErrors } from 'hooks'

export default function Fullname() {
  const context = React.useContext(EditUserContext)
  const { setData, errors } = context

  const [fullname, setFullname] = React.useState('')
  const error = useErrors(errors, 'fullname')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        fullname,
      }
    })
  }, [fullname])

  return (
    <Input
      label="ФИО"
      error={error}
      value={fullname}
      onInput={setFullname}
      className="col col-12 "
    />
  )
}
