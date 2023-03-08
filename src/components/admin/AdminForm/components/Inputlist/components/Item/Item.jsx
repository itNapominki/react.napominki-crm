import styles from './Item.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { Input } from 'components/general'

import { useErrors } from 'hooks'

import removeIcon from 'assets/sprites/remove.svg'

export default function Item({
  handleRemove,
  handleInput,
  text,
  name,
  errors,
}) {
  const error = useErrors(errors.array, errors.param)

  return (
    <div className={styles.container}>
      <div className={styles.deleteButton} onClick={handleRemove}>
        <HandySvg src={removeIcon} />
      </div>
      <Input
        value={text}
        name={name}
        error={error}
        errorDown
        onInput={handleInput}
      />
    </div>
  )
}
