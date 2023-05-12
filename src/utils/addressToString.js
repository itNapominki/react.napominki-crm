export default function addressToString({
  region,
  city,
  county,
  district,
  street,
  house,
}) {
  const hasTitle = (obj) => (obj ? obj.title : null)

  return [
    hasTitle(region),
    hasTitle(city),
    hasTitle(county),
    hasTitle(district),
    street,
    house,
  ]
    .filter((string) => string && string.length > 0)
    .join(', ')
}
