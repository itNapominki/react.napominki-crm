import React from 'react'

export default function useOptions(options) {
  const [droplist, setDroplist] = React.useState([])

  React.useEffect(() => {
    if (options) {
      const arr = options.map((option) => {
        return {
          text: option.title,
          value: option,
        }
      })

      setDroplist(arr)
    }
  }, [options])

  return [droplist]
}
