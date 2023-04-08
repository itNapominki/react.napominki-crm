import React from 'react'
import { AdminForm } from 'components'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'hooks'
import { OBJECT_TYPES } from 'core/constants'

const options = Object.keys(OBJECT_TYPES).map((TYPE) => ({
  text: OBJECT_TYPES[TYPE].SINGLE_VALUE,
  value: TYPE,
}))

export default function Type() {
  const { initial } = React.useContext(EditObjectContext)

  const [value, setValue] = useInitial(initial, 'type', options[0].value)

  return (
    <AdminForm.Control
      type="SELECT"
      label="Тип объекта"
      name="type"
      value={value}
      onChange={setValue}
      options={options}
      className="col col-12"
    />
  )
}
