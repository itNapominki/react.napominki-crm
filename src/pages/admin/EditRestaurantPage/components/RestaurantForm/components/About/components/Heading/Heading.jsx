import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'
import { AddImage } from './components'

export default function Heading() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const title = useInitial(initial, 'title', '')
  const cardTitle = useInitial(initial, 'cardTitle', '')
  const initialPreview = useInitial(initial, 'preview', null)

  const titleError = useErrors(errors, 'title')
  const cardTitleError = useErrors(errors, 'cardTitle')
  const previewError = useErrors(errors, 'preview')

  return (
    <AdminForm.Group title="Название">
      <div className="col col-8">
        <Input
          label="Название заведения"
          name="title"
          error={titleError}
          value={title}
        />
        <Input
          label="Заголовок карточки"
          name="cardTitle"
          error={cardTitleError}
          value={cardTitle}
        />
      </div>
      {/* <div className="col col-4">
        <AddImage
          initialPreview={initialPreview}
          // setData={setData}
          error={previewError}
        />
      </div> */}
    </AdminForm.Group>
  )
}
