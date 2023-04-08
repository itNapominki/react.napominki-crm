import styles from './Inputlist.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { AdminForm } from 'components'

import { useErrors } from 'hooks'

import removeIcon from 'assets/sprites/remove.svg'

export default function Item({
  handleRemove,
  handleInput,
  value,
  name,
  errors,
}) {
  const error = useErrors(errors, name)

  return (
    <div className={styles.item}>
      <div className={styles.deleteButton} onClick={handleRemove}>
        <HandySvg src={removeIcon} />
      </div>
      <AdminForm.Control
        name={name}
        value={value}
        error={{ text: error, down: true }}
        onInput={handleInput}
      />
    </div>
  )
}
