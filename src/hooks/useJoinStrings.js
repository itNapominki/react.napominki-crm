import React from 'react'

export default function useJoinStrings(strings) {
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    const string = handleChange(strings)

    setValue(string)
  }, strings)

  return value
}

function handleChange(strings) {
  let arr = []

  for (let string of strings) {
    if (string.length > 0) {
      arr.push(string)
    }
  }

  return arr.join(', ')
}
