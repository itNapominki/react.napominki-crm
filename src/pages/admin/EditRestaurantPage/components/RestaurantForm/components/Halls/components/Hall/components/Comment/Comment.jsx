import React from 'react'
import { AdminForm, Textarea } from 'components'

export default function Comment(data) {
  const { halls, setHalls, i } = data

  function handleInput(value) {
    setHalls((prev) =>
      prev.map((hall, index) => {
        if (index === i) {
          hall.comment = value
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Group title="Комментарий">
      <Textarea
        value={halls[i].comment}
        onInput={(value) => handleInput(value)}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}
