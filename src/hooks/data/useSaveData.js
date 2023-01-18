import { useNavigate } from 'react-router-dom'

export default function useSaveData(settings) {
  const { data, apiMethod, onSuccess, onError, id = null } = settings

  const navigate = useNavigate()

  async function handleSave() {
    // if (id) {
    //   return await apiMethod(id, data)
    //     .then((res) => {
    //       console.log(res)
    //       navigate('/admin')
    //     })
    //     .catch((error) => console.log(error))
    // }

    await apiMethod(data)
      .then((res) => {
        if (onSuccess) {
          onSuccess(res)
        }
      })
      .catch(({ response }) => {
        const { message, errors } = response.data
        console.log({ message, errors })

        if (onError) {
          onError({ message, errors })
        }
      })
  }

  return handleSave
}
