import styles from './Select.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import iconChevron from 'assets/sprites/chevron.svg'

export default function Fluid({ options, value, setVisible }) {
  const selected = options.find((option) => option.value === value)

  return (
    <div className={styles.fluid} onClick={() => setVisible((prev) => !prev)}>
      {typeof value === 'string' ? selected.text : value.join(', ')}
      <HandySvg src={iconChevron} />
    </div>
  )
}
