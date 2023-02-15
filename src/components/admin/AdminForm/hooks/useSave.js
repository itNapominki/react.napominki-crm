import { api } from 'core/utils'

export default function useSave({
  data,
  model,
  onSuccess,
  onError,
  id = null,
}) {
  async function handleSave() {
    if (id) {
      return await api
        .update({ model: api.model[model], id, data })
        .then((res) => handleSuccess(res))
        .catch(({ response }) => handleError(response))
    }

    await api
      .create({ model: api.model[model], data })
      .then((res) => handleSuccess(res))
      .catch(({ response }) => handleError(response))

    function handleSuccess(res) {
      if (onSuccess) {
        onSuccess(res)
      }
    }

    function handleError(res) {
      const { message, errors } = res.data
      console.log({ message, errors })

      if (onError) {
        onError({ message, errors })
      }
    }
  }

  return handleSave
}
