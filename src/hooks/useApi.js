import React from 'react'
import { api } from 'utils'

export default function useApi(url, defaultValue) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(defaultValue)

  React.useEffect(() => {
    async function getData() {
      api.users
        .getOne(id)
        .then(({ data }) => setServerData(data))
        .catch(({ response }) => alert(response.data.message))
    }

    getData()
  }, [])

  return api
}
