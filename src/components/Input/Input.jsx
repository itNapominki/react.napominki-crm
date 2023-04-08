import styles from './Input.module.scss'
import React from 'react'
import Inputmask from 'inputmask'

import { classNames } from 'core/utils'

export default function Input({
  className,
  type = 'text',
  mask,
  onInput,
  ...props
}) {
  // console.log('Render Input')

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
      type={type}
      onInput={onInput && ((e) => onInput(e.target.value))}
      className={classNames(styles.fluid, [className])}
      {...props}
    />
  )
}
