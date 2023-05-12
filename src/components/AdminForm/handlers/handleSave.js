import { api } from 'utils'

export default async function handleSave({
  data,
  model,
  onSave,
  onError,
  id = undefined,
}) {
  const settings = { model, data }

  if (id) {
    settings.id = id
  }

  if (id !== undefined) {
    return await api
      .update(settings)
      .then(({ data }) => handleSuccess(data))
      .catch(({ response }) => handleError(response))
  }

  await api
    .create(settings)
    .then(({ data }) => handleSuccess(data))
    .catch(({ response }) => handleError(response))

  function handleSuccess(data) {
    alert(id ? 'Данные обновлены' : 'Данные сохранены')

    if (onSave) {
      onSave(data)
    }
  }

  function handleError({ data }) {
    if (onError) {
      onError(data)
    }
  }
}
