import React from 'react'
import { Location } from '../../../..'
import { EditObjectContext } from 'context'
import { useServerData } from 'hooks'

export default function ObjectLocation(data) {
  const context = React.useContext(EditObjectContext)
  const { serverData, setData } = context
  const { location, setLocation } = data

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        address: { ...prev.address, ...location },
      }
    })
  }, [location])

  return <Location location={location} setLocation={setLocation} />
}
