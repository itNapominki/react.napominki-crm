import React from 'react'

export default function useErrors(errors, reference) {
  const [error, setError] = React.useState()

  React.useEffect(() => {
    if (errors) {
      const error = errors.find(({ param }) => param === reference)

      setError(error ? error.msg : null)
    }
  }, [errors])

  return error
}
