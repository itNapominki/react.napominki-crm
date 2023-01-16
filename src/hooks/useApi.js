import React from 'react'

export default function useApi(settings) {
  const { request, params, dependencies = [], callback } = settings

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    async function getData() {
      await request(params)
        .then((res) => {
          setData(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    getData()
  }, dependencies)

  React.useEffect(() => {
    if (callback && data) {
      callback(data)
    }
  }, [data])

  return data
}
