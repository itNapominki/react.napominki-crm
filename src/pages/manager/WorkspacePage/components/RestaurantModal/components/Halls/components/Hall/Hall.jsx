import styles from './Hall.module.scss'
import React from 'react'

import { AddButton, Comment, List, Separator } from 'components'
import { Gallery, Title } from './'

export default function Hall({ hall, added, onAddClick }) {
  const { title, boarding, fit, gallery, info, comment } = hall

  return (
    <div className={styles.container}>
      <Title title={title} boarding={boarding} fit={fit} />

      {gallery && <Gallery gallery={gallery} />}

      {info && <List list={info} className={styles.list} />}

      {comment && <Comment text={comment} className={styles.comment} />}

      <AddButton
        className={styles.addButton}
        added={added}
        onClick={onAddClick}
        text={(added ? 'Добавлено' : 'Добавить') + ' к предложению'}
      />

      <Separator />
    </div>
  )
}
