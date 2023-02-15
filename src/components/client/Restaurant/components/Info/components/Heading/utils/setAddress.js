import { joinStrings } from 'core/utils'

export default function setAddress(address) {
  const { city, county, district, street, house } = address

  return joinStrings([
    city ? city.value.title : null,
    county ? county.value.title : null,
    district ? district.value.title : null,
    district ? district.value.title : null,
    address.street,
    address.house,
  ])
}
