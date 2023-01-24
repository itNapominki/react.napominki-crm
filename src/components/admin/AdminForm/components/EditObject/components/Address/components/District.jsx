import React from 'react'
import { Select } from 'components'

export default function District(data) {
  const { locations, county, district, setDistrict } = data

  const [options, setOptions] = React.useState()

  React.useEffect(() => {
    if (options) {
      const isInside = options.find((elem) => elem === district)

      if (!isInside) {
        setDistrict(options[0])
      }
    }
  }, [options])

  React.useEffect(() => {
    if (locations && county) {
      const arr = locations.districts
        .filter(({ countyId }) => countyId === county.value.id)
        .map((elem) => {
          return {
            text: elem.title,
            value: {
              id: elem.id,
              title: elem.title,
              slug: elem.slug,
              countyId: elem.countyId,
            },
          }
        })

      if (arr.length > 0) {
        setOptions(arr)
      } else {
        setOptions(null)
      }
    }
  }, [county, locations])

  if (!options) {
    return
  }

  return (
    <Select
      label="Район"
      value={district}
      options={options}
      onChange={setDistrict}
      className="col col-4"
    />
  )
}
