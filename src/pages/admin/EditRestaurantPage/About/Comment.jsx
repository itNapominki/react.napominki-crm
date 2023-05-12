import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'

export default function Comment() {
  const { initial } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'clientInfo.comment', '')

  return (
    <AdminForm.Group title="Комментарий">
      <AdminForm.Control
        type="TEXTAREA"
        value={value}
        onInput={setValue}
        name="clientInfo.comment"
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
