import styles from './Select.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import iconChevron from 'assets/sprites/chevron.svg'

export default function Fluid({ value, options, setVisible }) {
  return (
    <div className={styles.fluid} onClick={() => setVisible((prev) => !prev)}>
      {options
        .filter((option) => option.value === value)
        .map(({ text }) => text)
        .join(', ')}
      <HandySvg src={iconChevron} />
    </div>
  )
}
