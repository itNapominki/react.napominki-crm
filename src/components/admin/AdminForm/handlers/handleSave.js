import { api } from 'core/utils'

export default function handleSave({
  data,
  model,
  onSave,
  onError,
  id = null,
}) {
  return async function () {
    if (id) {
      return await api
        .update({ model, id, data })
        .then(({ data }) => handleSuccess(data))
        .catch(({ response }) => handleError(response))
    }

    await api
      .create({ model, data })
      .then(({ data }) => handleSuccess(data))
      .catch(({ response }) => handleError(response))
  }

  function handleSuccess(data) {
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
