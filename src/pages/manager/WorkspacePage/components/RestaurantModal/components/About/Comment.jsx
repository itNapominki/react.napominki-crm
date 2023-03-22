import styles from './About.module.scss'
import React from 'react'

export default function Comment({ text }) {
  const SHOW = 200

  const [replace, setReplace] = React.useState(text.length > SHOW)
  const initial = replace ? text.substr(0, SHOW) + '...' : text

  const [comment, setComment] = React.useState(initial)

  function handleShowCLick() {
    setReplace(false)
    setComment(text)
  }

  return (
    <React.Fragment>
      <div className={styles.comment}>{comment}</div>
      {replace && (
        <div className={styles.showComment} onClick={handleShowCLick}>
          Показать полностью
        </div>
      )}
    </React.Fragment>
  )
}
