import React from 'react'

export default function useServerData(serverData, key, defaultValue) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (serverData) {
      const keys = key.split('.')
      let data = serverData

      for (let key of keys) {
        data = data[key]
      }

      setValue(data)
    }
  }, [serverData])

  return [value, setValue]
}
