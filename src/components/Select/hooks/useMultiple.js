import React from 'react'

export default function useMultiple(value, options, onChange) {
  const [multipleValue, setMultipleValue] = React.useState(value)

  React.useEffect(() => {
    onChange(multipleValue)
  }, [multipleValue])

  function handleChooseOption(value, i) {
    return setMultipleValue((prev) => {
      const indexes = prev.map((value) =>
        options.map(({ value }) => value).indexOf(value)
      )

      if (indexes.includes(i)) {
        return prev.filter((el) => el != value)
      }

      indexes.push(i)
      indexes.sort((a, b) => a - b)

      const position = indexes.indexOf(i)

      return [...prev.slice(0, position), value, ...prev.slice(position)]
    })
  }

  return handleChooseOption
}
