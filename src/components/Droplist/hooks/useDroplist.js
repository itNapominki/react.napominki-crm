import React from 'react'

export default function useDroplist({
  visible,
  setVisible,
  closeOnChange,
  droplistRef,
}) {
  React.useEffect(() => {
    if (visible) {
      setTimeout(() => {
        document.addEventListener('click', closeDroplist)
      }, 0)
    }

    return () => document.removeEventListener('click', closeDroplist)
  }, [visible])

  function closeDroplist(e) {
    const clickInside =
      [...droplistRef.current.children].indexOf(e.target) !== -1

    if (!closeOnChange && clickInside) {
      return
    }

    setVisible(false)
  }
}
