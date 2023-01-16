import React from 'react'

export default function useSelect(data) {
  const { defaultValue, options, callback } = data

  const [value, setValue] = React.useState(defaultValue)
  // const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    if (callback) {
      return callback(value)
    }
  }, [value])

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  // React.useEffect(() => {
  //   if (isVisible) {
  //     setTimeout(() => document.addEventListener('click', closeDroplist), 0)
  //   }
  // }, [isVisible])

  // function closeDroplist(e) {
  //   const target = e.target
  //   const DROPLIST_CLASS = '.droplist'

  //   if (
  //     target.classList.contains(DROPLIST_CLASS) ||
  //     target.closest(DROPLIST_CLASS)
  //   )
  //     return

  //   setIsVisible(false)
  //   document.removeEventListener('click', closeDroplist)
  // }

  return [value, setValue]
}
