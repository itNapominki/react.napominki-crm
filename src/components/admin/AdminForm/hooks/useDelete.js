import { useNavigate } from 'react-router-dom'
import { api } from 'utils'

export default function useDelete(settings) {
  const { message = 'Подтвердите удаление', model, id } = settings
  const navigate = useNavigate()

  async function handleRemove() {
    if (window.confirm(message)) {
      await api[model]
        .delete(id)
        .then(() => handleSuccess())
        .catch(({ response }) => handleError(response))
    }

    function handleSuccess() {
      navigate('/admin/' + model)
    }

    function handleError(res) {
      const { message } = res.data

      alert(message)
    }
  }

  return handleRemove
}
