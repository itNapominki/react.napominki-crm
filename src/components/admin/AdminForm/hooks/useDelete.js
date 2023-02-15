import { useNavigate } from 'react-router-dom'
import { api } from 'core/utils'

export default function useDelete(settings) {
  const { message = 'Подтвердите удаление', model, id } = settings
  const navigate = useNavigate()

  async function handleRemove() {
    if (window.confirm(message)) {
      await api
        .delete({ model: api.model[model], id })
        .then(() => handleSuccess())
        .catch(({ response }) => handleError(response))
    }

    function handleSuccess() {
      navigate('/admin/' + model + 's')
    }

    function handleError(res) {
      const { message } = res.data

      alert(message)
    }
  }

  return handleRemove
}
