import styles from './Main.module.scss'
import React from 'react'

import { Comment, Separator } from 'components'
import { List } from './'

export default function Info({ title, list, comment }) {
  const showComment = comment && comment.length > 0
  const showList = list && list.length > 0

  const show = showList || showComment

  const WINDOW_WIDTH = window.width

  return (
    show && (
      <React.Fragment>
        <Separator />
        <div className={styles.info__title}>{title}</div>

        {showList && <List list={list} />}
        {showComment && (
          <Comment
            className={styles.comment}
            text={comment}
            show={WINDOW_WIDTH > 650 ? 600 : 200}
          />
        )}
      </React.Fragment>
    )
  )
}
