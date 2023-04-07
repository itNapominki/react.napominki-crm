import styles from './Input.module.scss'
import React from 'react'

import Inputmask from 'inputmask'

export default function Input({ type = 'text', mask, onInput, ...props }) {
  const inputRef = React.useRef()

  React.useEffect(() => {
    if (mask) {
      const nodeInput = inputRef.current
      const im = new Inputmask(mask[0], mask[1])

      im.mask(nodeInput)
    }
  }, [inputRef, mask])

  return (
    <input
      ref={inputRef}
      onInput={onInput && ((e) => onInput(e.target.value))}
      className={styles.fluid}
      {...props}
    />
  )
}
