import React from 'react'
import { Select } from 'components'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'hooks'

const options = [
  { text: 'Кладбище', value: 'cemetery' },
  { text: 'Крематорий', value: 'crematory' },
  { text: 'Морг', value: 'morgue' },
  { text: 'Метро', value: 'metro' },
]

export default function Type() {
  const context = React.useContext(EditObjectContext)
  const { initial, setData } = context

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
