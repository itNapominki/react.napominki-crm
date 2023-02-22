import React from 'react'
import { Select } from 'components'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'hooks'
import { OBJECT_TYPES } from 'core/constants'

const options = [
  { text: 'Кладбище', value: OBJECT_TYPES.CEMETERY },
  { text: 'Крематорий', value: OBJECT_TYPES.CREMATORY },
  { text: 'Морг', value: OBJECT_TYPES.MORGUE },
  { text: 'Метро', value: OBJECT_TYPES.METRO },
]

export default function Type() {
  const { initial, setData } = React.useContext(EditObjectContext)

  const [type, setType] = useInitial(initial, 'type', options[0])

  React.useEffect(() => {
    if (initial) {
      const slug = initial.type
      const type = options.find(({ value }) => value === slug)

      setType(type)
    }
  }, [initial])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        type: type.value,
      }
    })
  }, [type])

  return (
    <Select
      label="Тип объекта"
      value={type}
      options={options}
      onChange={setType}
      className="col col-12 "
    />
  )
}
