import React from 'react'
import { OBJECT_TYPES } from 'constants'

export default function useObjectTypes(data) {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    let types = Object.keys(OBJECT_TYPES)
      .map((TYPE) => {
        return {
          title: OBJECT_TYPES[TYPE].PLURAL_VALUE,
          slug: TYPE,
          objects: setObjects(TYPE),
        }
      })
      .filter(({ objects }) => objects.length > 0)

    setTypes(types)
  }, [data])

  function setObjects(objectsType) {
    return data
      .map((object) => {
        const address = object.address.replaceAll('_, ', '')

        return {
          ...object,
          address,
        }
      })
      .filter(({ type }) => type === objectsType)
  }

  return types
}
