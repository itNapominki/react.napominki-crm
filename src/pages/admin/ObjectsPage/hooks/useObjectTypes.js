import React from 'react'
import { addressToString } from 'core/utils'
import { OBJECT_TYPES } from 'core/constants'

export default function useObjectTypes(data) {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const types = [
      {
        title: 'Кладбища',
        slug: OBJECT_TYPES.CEMETERY,
        objects: setObjects(OBJECT_TYPES.CEMETERY),
      },
      {
        title: 'Крематории',
        slug: OBJECT_TYPES.CREMATORY,
        objects: setObjects(OBJECT_TYPES.CREMATORY),
      },
      {
        title: 'Морги',
        slug: OBJECT_TYPES.MORGUE,
        objects: setObjects(OBJECT_TYPES.MORGUE),
      },
      {
        title: 'Метро',
        slug: OBJECT_TYPES.METRO,
        objects: setObjects(OBJECT_TYPES.METRO),
      },
    ].filter(({ objects }) => objects.length > 0)

    setTypes(types)
  }, [data])

  function setObjects(objectsType) {
    return data
      .map((object) => {
        const { city, county, district, street, house } = object.address
        const address = addressToString({
          city,
          county,
          district,
          street,
          house,
        })

        return {
          ...object,
          address: address,
        }
      })
      .filter(({ type }) => type === objectsType)
  }

  return types
}
