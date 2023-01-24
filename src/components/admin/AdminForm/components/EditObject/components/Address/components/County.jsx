import React from 'react'
import { Select } from 'components'

export default function County(data) {
  const { locations, city, county, setCounty } = data

  const [options, setOptions] = React.useState()

  React.useEffect(() => {
    if (options) {
      const isInside = options.find((elem) => elem === county)

      if (!isInside) {
        setCounty(options[0])
      }
    }
  }, [options])

  React.useEffect(() => {
    if (locations && city) {
      const arr = locations.counties
        .filter(({ cityId }) => cityId === city.value.id)
        .map((elem) => {
          return {
            text: elem.title,
            value: {
              id: elem.id,
              title: elem.title,
              slug: elem.slug,
              cityId: elem.cityId,
            },
          }
        })

      if (arr.length > 0) {
        setOptions(arr)
      } else {
        setOptions(null)
      }
    }
  }, [city, locations])

  if (!options) {
    return
  }

  return (
    <Select
      label="Район"
      value={county}
      options={options}
      onChange={setCounty}
      className="col col-4"
    />
  )
}
