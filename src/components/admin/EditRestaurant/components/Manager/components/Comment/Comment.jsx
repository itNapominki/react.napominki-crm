import React from 'react'
import { AdminForm, Textarea } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function Comment() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData } = context

  const [comment, setComment] = useServerData(
    serverData,
    'managerInfo.comment',
    ''
  )

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        managerInfo: {
          ...prev.managerInfo,
          comment,
        },
      }
    })
  }, [comment])

  return (
    <AdminForm.Group title="Комментарий">
      <Textarea value={comment} onInput={setComment} className="col col-12" />
    </AdminForm.Group>
  )
}
