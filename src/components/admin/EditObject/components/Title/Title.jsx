import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Title() {
  const context = React.useContext(EditObjectContext)
  const { initial, errors, setData } = context

  const [title, setTitle] = useInitial(initial, 'title', '')
  const error = useErrors(errors, 'title')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        title,
      }
    })
  }, [title])

  return (
    <Input
      label="Название объекта"
      error={error}
      value={title}
      onInput={setTitle}
      className="col col-12"
    />
  )
}
