import React from 'react'
import { Select } from 'components'
import { EditUserContext } from 'context'
import { useServerData } from 'hooks'

const options = [
  { text: 'Менеджер', value: 'manager' },
  { text: 'Редактор', value: 'redaktor' },
  { text: 'Админ', value: 'admin' },
]

export default function Role() {
  const context = React.useContext(EditUserContext)
  const { serverData, setData } = context

  const [role, setRole] = useServerData(serverData, 'role', options[0])

  React.useEffect(() => {
    if (serverData) {
      const slug = serverData.role
      const role = options.find(({ value }) => value === slug)

      setRole(role)
    }
  }, [serverData])

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
