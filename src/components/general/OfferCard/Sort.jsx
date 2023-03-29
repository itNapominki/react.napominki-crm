import styles from './OfferCard.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { ManagerOfferContext } from 'core/context'

import iconChevron from 'assets/sprites/chevron-outlined.svg'

export default function Sort({ id }) {
  return (
    <div>
      <Button id={id} direction="UP" />
      <Button id={id} direction="DOWN" />
    </div>
  )
}

function Button({ direction, id }) {
  const { handle } = React.useContext(ManagerOfferContext)

  return (
    <button
      className={styles.sortButton}
      onClick={() => handle.sort(id, direction)}
    >
      <HandySvg src={iconChevron}></HandySvg>
    </button>
  )
}
