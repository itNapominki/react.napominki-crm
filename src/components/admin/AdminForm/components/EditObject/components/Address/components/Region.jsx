import React from 'react'
import { Select } from 'components'

export default function Region(data) {
  const { locations, region, setRegion } = data

  const [options, setOptions] = React.useState([{ text: '', value: '' }])

  React.useEffect(() => {
    if (locations) {
      const arr = locations.regions.map((elem) => {
        return {
          text: elem.title,
          value: {
            id: elem.id,
            title: elem.title,
            slug: elem.slug,
          },
        }
      })

      setOptions(arr)
      setRegion(arr[0])
    }
  }, [locations])

  return (
    <Select
      label="Регион"
      value={region}
      options={options}
      onChange={setRegion}
      className="col col-4"
    />
  )
}
