import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { useInitial } from 'hooks'
import { USER_ROLES } from 'constants'

const options = Object.keys(USER_ROLES).map((ROLE) => ({
  text: USER_ROLES[ROLE].SINGLE_VALUE,
  value: ROLE,
}))

export default function Role() {
  const { initial } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'role', options[0].value)

  return (
    <AdminForm.Control
      type="SELECT"
      label="Тип пользователя"
      name="role"
      value={value}
      onChange={setValue}
      options={options}
      className="col col-12 "
    />
  )
}
