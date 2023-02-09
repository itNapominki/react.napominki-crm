import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors, useServerData } from 'hooks'
import { AddImage } from './components'

export default function Heading() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, errors, setData } = context

  const [title, setTitle] = useServerData(serverData, 'title', '')
  const [cardTitle, setCardTitle] = useServerData(serverData, 'cardTitle', '')
  const [initialPreview] = useServerData(serverData, 'preview', null)

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
