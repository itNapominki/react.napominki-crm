import React from 'react'
import { AdminForm, Input } from 'components'
import { EditRestaurantContext } from 'context'
import { useErrors } from 'hooks'

export default function MainGroup(data) {
  const { halls, setHalls, i } = data

  const context = React.useContext(EditRestaurantContext)
  const { errors } = context

  const titleError = useErrors(errors, '')
  const boardingError = useErrors(errors, '')
  const fitError = useErrors(errors, '')

  function handleInput(key, value) {
    setHalls((prev) =>
      prev.map((hall, index) => {
        if (index === i) {
          hall[key] = value
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Group>
      <Input
        label="Название зала"
        bigLabel
        error={titleError}
        value={halls[i].title}
        onInput={(value) => handleInput('title', value)}
        className="col col-4"
      />
      <Input
        label="Посадка от, чел."
        bigLabel
        error={boardingError}
        value={halls[i].boarding}
        onInput={(value) => handleInput('boarding', value)}
        className="col col-4"
      />
      <Input
        label="Вместимость до, чел."
        bigLabel
        error={fitError}
        value={halls[i].fit}
        onInput={(value) => handleInput('fit', value)}
        className="col col-4"
      />
    </AdminForm.Group>
  )
}
