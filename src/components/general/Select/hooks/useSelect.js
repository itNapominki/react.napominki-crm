import React from 'react'

export default function useSelect(defaultValue, options = [], callback) {
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

  function handleChange(option) {
    setValue(option)
    setVisible(false)
  }

  const droplist = options.map((option) => {
    return {
      ...option,
      onClick: () => {
        if (option.onClick) {
          const { text, value } = option

          option.onClick({ text, value })
        }

        handleChange(option)
      },
    }
  })

  return [value, droplist, visible, setVisible]
}
