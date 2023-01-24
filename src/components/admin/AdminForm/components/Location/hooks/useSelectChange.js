import React from 'react'
import { convertServerData } from '../utils'

export default function useSelectChange(
  selected,
  reference,
  setSingle,
  serverData
) {
  const [loaded, setLoaded] = React.useState(false)
  const [values, setValues] = React.useState()

  React.useEffect(() => {
    if (!loaded) {
      return setLoaded(true)
    }

    const arr = handleToggleSelect(selected, reference)

    if (arr) {
      setValues(arr)
      setSingle(arr[0])
    } else {
      setValues(null)
      setSingle(null)
    }
  }, [selected])

  function handleToggleSelect(selected, ref) {
    if (selected) {
      const PARENT_ID_OBJ_VALUE =
        ref === 'cities'
          ? 'regionId'
          : ref === 'counties'
          ? 'cityId'
          : ref === 'districts'
          ? 'countyId'
          : console.error('Ошибка при смене селектов (AdminForm Address)')

      const selectedId = selected.id
      const arr = serverData[ref]
      const actual = arr.filter(
        (item) => item[PARENT_ID_OBJ_VALUE] === selectedId
      )

      return actual.length > 0 ? convertServerData(actual) : null
    }
  }

  return [values]
}
