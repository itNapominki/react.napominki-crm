import React from 'react'
import { AdminForm } from 'components'

export default function Info() {
  const [list, setList] = React.useState([])

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      onChange={setList}
    />
  )
}
