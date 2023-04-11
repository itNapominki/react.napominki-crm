import styles from './Select.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import iconChevron from 'assets/sprites/chevron.svg'

export default function Fluid({ value, setOpened }) {
  return (
    <div className={styles.fluid} onClick={() => setOpened((prev) => !prev)}>
      {value}
      <HandySvg src={iconChevron} />
    </div>
  )
}
