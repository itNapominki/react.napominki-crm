import React from 'react'
import { Select } from 'components'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'hooks'
import { OBJECT_TYPES } from 'core/constants'

const options = Object.keys(OBJECT_TYPES).map((TYPE) => ({
  text: OBJECT_TYPES[TYPE].SINGLE_VALUE,
  value: TYPE,
}))

export default function Type() {
  const { initial } = React.useContext(EditObjectContext)

  const type = useInitial(initial, 'type')
  const value = type ? options.find(({ value }) => value === type) : options[0]

  return (
    <Select
      label="Тип объекта"
      name="type"
      value={value}
      options={options}
      className="col col-12"
    />
  )
}
