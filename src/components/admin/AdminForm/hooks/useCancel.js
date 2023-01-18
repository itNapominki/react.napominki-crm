import { useNavigate } from 'react-router-dom'

export default function useCancel({ message, route }) {
  const navigate = useNavigate()

  async function handleCancel() {
    if (window.confirm(message)) {
      navigate(route)
    }
  }

  return handleCancel
}
