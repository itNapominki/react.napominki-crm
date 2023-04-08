import styles from './Textarea.module.scss'
import React from 'react'

export default function Textarea({ onInput, ...props }) {
  // console.log('Render Textarea')

  return (
    <textarea
      onInput={onInput && ((e) => onInput(e.target.value))}
      className={styles.fluid}
      {...props}
    />
  )
}
