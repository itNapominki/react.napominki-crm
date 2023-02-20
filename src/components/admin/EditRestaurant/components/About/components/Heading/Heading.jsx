import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'
import { AddImage } from './components'

export default function Heading() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, errors, setData } = context

  const [title, setTitle] = useInitial(initial, 'title', '')
  const [cardTitle, setCardTitle] = useInitial(initial, 'cardTitle', '')
  const [initialPreview] = useInitial(initial, 'preview', null)

  const titleError = useErrors(errors, 'title')
  const cardTitleError = useErrors(errors, 'cardTitle')
  const previewError = useErrors(errors, 'preview')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        title,
        cardTitle,
      }
    })
  }, [title, cardTitle])

  return (
    <AdminForm.Group title="Название">
      <div className="col col-8">
        <Input
          label="Название заведения"
          error={titleError}
          value={title}
          onInput={setTitle}
        />
        <Input
          label="Заголовок карточки"
          error={cardTitleError}
          value={cardTitle}
          onInput={setCardTitle}
        />
      </div>
      <div className="col col-4">
        <AddImage
          initialPreview={initialPreview}
          setData={setData}
          error={previewError}
        />
      </div>
    </AdminForm.Group>
  )
}
