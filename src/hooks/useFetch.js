import React from 'react'

const BASE_URL = process.env.REACT_APP_API_URL

export default function useFetch(url) {
  console.log(BASE_URL)
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    if (!data) {
      fetch(BASE_URL + url)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return data
}
