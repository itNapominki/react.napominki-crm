import React from 'react'

const stringify = (obj) => JSON.stringify(obj)
const checkOption = (arr, obj) => {
  return arr.map((option) => stringify(option)).indexOf(stringify(obj))
}

export default function useMultiple(defaultValue = [], options = [], callback) {
  const [value, setValue] = React.useState(defaultValue)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (callback) {
      return callback(value)
    }
  }, [value])

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const droplist = options.map((option, i) => {
    return {
      ...option,
      onClick: (e) => handleChooseOption(option, i, e),
    }
  })

  function handleChooseOption(option, index, e) {
    setValue((prev) => {
      let indexes = prev.map((item) => {
        return checkOption(options, item)
      })

      if (indexes.includes(index)) {
        return prev.filter((elem) => stringify(elem) != stringify(option))
      }

      indexes.push(index)
      indexes.sort((a, b) => a - b)

      const position = indexes.indexOf(index)

      return [...prev.slice(0, position), option, ...prev.slice(position)]
    })
  }

  return [value, droplist, visible, setVisible]
}
