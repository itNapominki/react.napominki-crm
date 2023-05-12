import styles from './Heading.module.scss'
import React from 'react'

import { AdminForm } from 'components'
import { AddImage } from './'

import { EditRestaurantContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function Heading() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [title, setTitle] = useInitial(initial, 'title', '')
  const [cardTitle, setCardTitle] = useInitial(initial, 'cardTitle', '')
  const [preview, setPreview] = useInitial(initial, 'preview', '')

  const titleError = useErrors(errors, 'title')
  const cardTitleError = useErrors(errors, 'cardTitle')
  const previewError = useErrors(errors, 'preview')

  return (
    <AdminForm.Group title="Название">
      <div className="col col-8">
        <AdminForm.Control
          label="Название заведения"
          name="title"
          error={titleError}
          value={title}
          onInput={setTitle}
          className={styles.inputTitle}
        />
        <AdminForm.Control
          label="Заголовок карточки"
          name="cardTitle"
          error={cardTitleError}
          value={cardTitle}
          onInput={setCardTitle}
        />
      </div>
      <div className={styles.preview + ' col col-4'}>
        <AddImage value={preview} setValue={setPreview} error={previewError} />
      </div>
    </AdminForm.Group>
  )
}
