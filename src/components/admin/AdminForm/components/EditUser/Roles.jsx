import React from 'react'
import { Select } from 'components'
import { EditUserContext } from 'context'

export default function Roles() {
  const context = React.useContext(EditUserContext)
  const { localRoles, setData } = context

  const [role, setRole] = React.useState({ text: '', value: '' })

  React.useEffect(() => {
    if (localRoles) {
      setRole(localRoles[0])
    }
  }, [localRoles])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        role,
      }
    })
  }, [role])

  return (
    <Select
      label="Тип пользователя"
      value={role}
      options={localRoles}
      onChange={setRole}
      className="col col-12 "
    />
  )
}
