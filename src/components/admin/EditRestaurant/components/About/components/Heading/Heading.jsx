import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Heading() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, errors, setData } = context

  const [title, setTitle] = useServerData(serverData, 'title', '')
  const [cardTitle, setCardTitle] = useServerData(serverData, 'cardTitle', '')
  const [preview, setPreview] = useServerData(serverData, 'preview', null)

  const titleError = useErrors(errors, 'title')
  const cardTitleError = useErrors(errors, 'cardTitle')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        title,
        cardTitle,
        preview,
      }
    })
  }, [title, cardTitle, preview])

  async function uploadPreview(files) {
    const src = URL.createObjectURL(files[0])
    setPreview(src)

    const formData = new FormData()
    formData.append('file', files[0])

    fetch(process.env.REACT_APP_API_URL + '/files/images', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((filename) => setPreview(filename))
  }

  function getPreview() {
    if (preview === null || preview.includes('base64')) {
      return preview
    }

    return process.env.REACT_APP_SERVER_URL + '/images/' + preview
  }

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
        <AdminForm.Image
          label="Превью"
          onChange={uploadPreview}
          background={getPreview(preview)}
        />
      </div>
    </AdminForm.Group>
  )
}
