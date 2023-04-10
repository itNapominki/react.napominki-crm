import React from 'react'

export default function useInitial(initial, key, defaultValue) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (initial) {
      const keys = key.split('.')
      let data = initial

      for (let key of keys) {
        data = data[key]
      }

      if (data) {
        setValue(data)
      }
    }
  }, [initial])

  return [value, setValue]
}
