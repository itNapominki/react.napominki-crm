import React from 'react'
import { joinStrings } from 'utils'

export default function useJoinStrings(strings) {
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    const string = joinStrings(strings)

    setValue(string)
  }, strings)

  return value
}
