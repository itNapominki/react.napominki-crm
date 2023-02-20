import React from 'react'

export default function useInput(defaultValue, callback) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (callback) {
      return callback(value)
    }
  }, [value])

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return [value, setValue]
}
