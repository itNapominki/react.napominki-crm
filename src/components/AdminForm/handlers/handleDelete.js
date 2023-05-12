import { api } from 'utils'

export default function handleDelete({
  onDelete,
  message = 'Подтвердите удаление',
  model,
  id,
}) {
  return async function () {
    if (window.confirm(message)) {
      await api
        .delete({ model, id, message })
        .then(() => handleSuccess())
        .catch(({ response }) => handleError(response))
    }
  }

  function handleSuccess() {
    if (onDelete) {
      onDelete()
    }
  }

  function handleError({ data }) {
    if (onError) {
      onError(data)
    }
  }
}
