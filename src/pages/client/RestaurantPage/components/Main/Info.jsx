import styles from './Main.module.scss'
import React from 'react'

import { Comment, Separator } from 'components/general'
import { List } from './'

export default function Info({ title, list, comment }) {
  const showComment = comment && comment.length > 0
  const showList = list && list.length > 0

  const show = showList || showComment

  return (
    show && (
      <React.Fragment>
        <Separator />
        <div className={styles.infoTitle}>{title}</div>
        {showList && <List list={list} />}
        {showComment && (
          <Comment className={styles.comment} text={comment} show={600} />
        )}
      </React.Fragment>
    )
  )
}
