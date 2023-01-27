import React from 'react'
import { Select } from 'components'
import { EditObjectContext } from 'context'
import { useServerData } from 'hooks'

const options = [
  { text: 'Кладбище', value: 'cemetery' },
  { text: 'Крематорий', value: 'crematory' },
  { text: 'Морг', value: 'morgue' },
  { text: 'Метро', value: 'metro' },
]

export default function Type() {
  const context = React.useContext(EditObjectContext)
  const { serverData, setData } = context

  const [type, setType] = useServerData(serverData, 'type', options[0])

  React.useEffect(() => {
    if (serverData) {
      const slug = serverData.type
      const type = options.find(({ value }) => value === slug)

      setType(type)
    }
  }, [serverData])

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
