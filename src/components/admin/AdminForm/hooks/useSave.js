import { api } from 'utils'

export default function useSave(settings) {
  const { data, model, onSuccess, onError, id = null } = settings

  async function handleSave() {
    if (id) {
      return await api[model]
        .update(id, data)
        .then((res) => handleSuccess(res))
        .catch(({ response }) => handleError(response))
    }

    await api[model]
      .create(data)
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
