import React from 'react'
import { AdminForm, Textarea } from '../../../..'

export default function AdminFormComment(data) {
  const { comment, setComment } = data

  return (
    <AdminForm.Group>
      <Textarea
        className="col col-12"
        label="Комментарий"
        bigLabel
        onInput={setComment}
        value={comment}
      />
    </AdminForm.Group>
  )
}
