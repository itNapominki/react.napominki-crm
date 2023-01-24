import React from 'react'

export default function useServerData(serverData, key, defaultValue) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (serverData) {
      setValue(serverData[key])
    }
  }, [serverData])

  return [value, setValue]
}
