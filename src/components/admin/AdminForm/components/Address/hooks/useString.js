import React from 'react'
import { joinStrings } from 'utils'

export default function useString(address) {
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    let { region, city, county, district, street, house } = address

    region = region ? region.text : null
    city = city ? city.text : null
    county = county ? county.text : null
    district = district ? district.text : null

    const string = joinStrings([region, city, county, district, street, house])

    setValue(string)
  }, [address])

  return value
}
