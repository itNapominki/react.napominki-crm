import { useNavigate } from 'react-router-dom'

export default function useCancel(settings) {
  const { message = 'Отменить редактирование?', model } = settings
  const navigate = useNavigate()

  function handleCancel() {
    if (window.confirm(message)) {
      navigate('/admin/' + model + 's')
    }
  }

  return handleCancel
}
