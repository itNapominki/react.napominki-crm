import React from 'react'
import { Select } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'core/hooks'

const options = [
  { text: 'Менеджер', value: 'manager' },
  { text: 'Редактор', value: 'redaktor' },
  { text: 'Админ', value: 'admin' },
]

export default function Role() {
  const context = React.useContext(EditUserContext)
  const { initial, setData } = context

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
