import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'context'
import { useErrors, useServerData } from 'hooks'

export default function Title() {
  const context = React.useContext(EditObjectContext)
  const { serverData, errors, setData } = context

  const [title, setTitle] = useServerData(serverData, 'title', '')
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
