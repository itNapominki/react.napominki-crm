import React from 'react'
import { Select } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'
import { USER_ROLES } from 'core/constants'

const options = [
  { text: USER_ROLES.MANAGER.TEXT, value: USER_ROLES.MANAGER.VALUE },
  { text: USER_ROLES.REDAKTOR.TEXT, value: USER_ROLES.REDAKTOR.VALUE },
  { text: USER_ROLES.ADMIN.TEXT, value: USER_ROLES.ADMIN.VALUE },
]

export default function Role() {
  const { initial, setData } = React.useContext(EditUserContext)

  const [role, setRole] = useInitial(initial, 'role', options[0])

  React.useEffect(() => {
    if (initial) {
      const slug = initial.role
      const role = options.find(({ value }) => value === slug)

      setRole(role)
    }
  }, [initial])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        role: role.value,
      }
    })
  }, [role])

  return (
    <Select
      label="Тип пользователя"
      value={role}
      options={options}
      onChange={setRole}
      className="col col-12 "
    />
  )
}
