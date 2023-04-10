import React from 'react'
import { SelectSearch } from '../'

export default function useDroplist(options, onChange, search) {
  const [droplist, setDroplist] = React.useState(
    options.map((option, i) => {
      return {
        ...option,
        onClick: () => onChange(option.value, i),
      }
    })
  )

  React.useEffect(() => {
    const Search = {
      Component: (
        <SelectSearch value={search.value} setValue={search.setValue} />
      ),
      closeOnClick: false,
    }

    console.log(search)

    if (search) {
      setDroplist((prev) => {
        if (!prev[0].Component) {
          return [Search, ...prev]
        }

        return prev.map((el, i) => (i === 0 ? Search : el))
      })
    }
  }, [search])

  return droplist
}
