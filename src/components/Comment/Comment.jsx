import styles from './Comment.module.scss'
import React from 'react'

export default function Comment({ className, text, show = 200 }) {
  const [replace, setReplace] = React.useState(text.length > show)
  const initial = replace ? text.substr(0, show) + '...' : text

  const [comment, setComment] = React.useState(initial)

  function handleShowCLick() {
    setReplace(false)
    setComment(text)
  }

  return (
    <div className={className}>
      <div className={styles.text}>{comment}</div>
      {replace && (
        <div className={styles.showComment} onClick={handleShowCLick}>
          Показать полностью
        </div>
      )}
    </div>
  )
}
