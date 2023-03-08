import React from 'react'
import { Select } from 'components'
import { EditUserContext } from 'core/context'
import { useInitial } from 'hooks'
import { USER_ROLES } from 'core/constants'

const options = Object.keys(USER_ROLES).map((ROLE) => ({
  text: USER_ROLES[ROLE].SINGLE_VALUE,
  value: ROLE,
}))

export default function Role() {
  const { initial } = React.useContext(EditUserContext)

  const role = useInitial(initial, 'role')
  const value = role ? options.find(({ value }) => value === role) : options[0]

  return (
    <Select
      label="Тип пользователя"
      name="role"
      value={value}
      options={options}
      className="col col-12 "
    />
  )
}
