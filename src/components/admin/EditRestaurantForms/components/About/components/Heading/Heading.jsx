import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Heading() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, errors, setData } = context

  const [title, setTitle] = useServerData(serverData, 'title', '')
  const [cardTitle, setCardTitle] = useServerData(serverData, 'cardTitle', '')

  const titleError = useErrors(errors, 'title')
  const cardTitleError = useErrors(errors, 'cardTitle')

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
      <Input
        label="Название заведения"
        error={titleError}
        value={title}
        onInput={setTitle}
        className="col col-12"
      />
      <Input
        label="Заголовок карточки"
        error={cardTitleError}
        value={cardTitle}
        onInput={setCardTitle}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
