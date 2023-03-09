import React from 'react'

export default function useInitial(initial) {
  const [region, setRegion] = React.useState()
  const [city, setCity] = React.useState()
  const [county, setCounty] = React.useState()
  const [district, setDistrict] = React.useState()

  React.useEffect(() => {
    if (initial) {
      const { region, city, county, district } = initial

      if (region) {
        setRegion({ text: region.title, value: region })
      }

      if (city) {
        setCity({ text: city.title, value: city })
      }

      if (county) {
        setCounty({ text: county.title, value: county })
      }

      if (district) {
        setDistrict({ text: district.title, value: district })
      }
    }
  }, [initial])

  return {
    region,
    setRegion,
    city,
    setCity,
    county,
    setCounty,
    district,
    setDistrict,
  }
}
