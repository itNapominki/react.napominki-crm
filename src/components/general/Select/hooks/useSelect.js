import React from 'react'

export default function useSelect(defaultValue, options = [], callback) {
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    if (callback) {
      return callback(value)
    }
  }, [value])

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const droplist = options.map((option) => {
    return {
      ...option,
      onClick: () => setValue(option),
    }
  })

  return [value, droplist]
}
