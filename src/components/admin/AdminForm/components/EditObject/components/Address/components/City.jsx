import React from 'react'
import { Select } from 'components'

export default function City(data) {
  const { locations, city, setCity } = data

  const [options, setOptions] = React.useState([{ text: '', value: '' }])

  React.useEffect(() => {
    if (locations) {
      const arr = locations.cities.map((elem) => {
        return {
          text: elem.title,
          value: {
            id: elem.id,
            title: elem.title,
            slug: elem.slug,
            regionId: elem.regionId,
          },
        }
      })

      setOptions(arr)
      setCity(arr[0])
    }
  }, [locations])

  return (
    <Select
      label="Город"
      value={city}
      options={options}
      onChange={setCity}
      className="col col-4"
    />
  )
}
