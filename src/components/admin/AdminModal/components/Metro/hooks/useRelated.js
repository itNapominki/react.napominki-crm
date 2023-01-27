import React from 'react'

export default function useRelated(serverData, related) {
  const [stations, setStations] = React.useState([])

  React.useEffect(() => {
    setStations((prev) => (prev.length > 0 ? map(prev) : map(serverData)))
  }, [serverData, related])

  function map(arr) {
    return arr.map((station) => {
      const obj = {
        id: station.id,
        title: station.title,
      }

      const isRelated = related.find(({ id }) => id === station.id)

      if (isRelated) {
        obj.distance = isRelated.distance
      }

      return obj
    })
  }

  return stations
}
