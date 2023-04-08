import React from 'react'

export default function useModalRef() {
  const modalRef = React.createRef()

  const [contentNode, setContentNode] = React.useState()

  React.useEffect(() => {
    const $modalContent = modalRef.current.querySelector('.js-modal-content')

    setContentNode($modalContent)
  }, [])

  return [modalRef, contentNode]
}
