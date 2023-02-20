import React from 'react'
import { Select } from 'components'

export default function GroupedSelect({
  label,
  locations,
  referal,
  type,
  value,
  setValue,
}) {
  const [options, setOptions] = React.useState()

  React.useEffect(() => {
    if (options) {
      if (!value) {
        return setValue(options[0])
      }

      const isInside = options.find(
        (option) => option.value.slug === value.value.slug
      )

      if (!isInside) {
        return setValue(options[0])
      }
    }

    if (options === null) {
      return setValue(null)
    }
  }, [options])

  React.useEffect(() => {
    if (referal && referal.instance === null) {
      return setOptions(null)
    }

    if (locations) {
      let arr = locations[type]
      const parentId =
        referal && referal.instance ? referal.instance.value.id : null

      if (parentId) {
        arr = arr.filter((elem) => elem[referal.name + 'Id'] === parentId)
      }

      arr = arr.map((elem) => {
        const obj = {
          text: elem.title,
          value: {
            id: elem.id,
            title: elem.title,
            slug: elem.slug,
          },
        }

        if (parentId) {
          obj[referal.name + 'Id'] = parentId
        }

        return obj
      })

      if (arr.length > 0) {
        return setOptions(arr)
      }

      setOptions(null)
    }
  }, [referal, locations])

  if (!options || !value) {
    return
  }

  return (
    <Select
      label={label}
      value={value}
      options={options}
      onChange={setValue}
      className="col col-4"
    />
  )
}
