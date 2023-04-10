import React from 'react'

export default function useDroplist({ visible, setVisible }) {
  React.useEffect(() => {
    if (visible) {
      setTimeout(() => {
        document.addEventListener('click', closeOutsideClick)
      }, 0)
    }

    return () => document.removeEventListener('click', closeOutsideClick)
  }, [visible])

  function closeOutsideClick(e) {
    if (e.target.closest('.js-droplist')) {
      return
    }

    setVisible(false)
  }
}
