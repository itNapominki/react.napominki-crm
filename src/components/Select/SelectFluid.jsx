import styles from './Select.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import iconChevron from 'assets/sprites/chevron.svg'

export default function Fluid({ options, value, setOpened }) {
  const selected = options.find((option) => option.value === value) || value
  const text =
    typeof selected === 'string'
      ? selected
      : typeof value === 'string'
      ? selected.text
      : value.join(', ')

  return (
    <div className={styles.fluid} onClick={() => setOpened((prev) => !prev)}>
      {text}
      <HandySvg src={iconChevron} />
    </div>
  )
}
