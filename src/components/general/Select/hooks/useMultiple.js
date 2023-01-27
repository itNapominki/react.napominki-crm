import React from 'react'

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
      const indexes = prev.map((item) => options.indexOf(item))

      if (indexes.includes(index)) {
        return prev.filter((elem) => elem != option)
      }

      indexes.push(index)
      indexes.sort((a, b) => a - b)

      const position = indexes.indexOf(index)

      return [...prev.slice(0, position), option, ...prev.slice(position)]
    })

    e.target.classList.toggle('selected')
  }

  return [value, droplist, visible, setVisible]
}
