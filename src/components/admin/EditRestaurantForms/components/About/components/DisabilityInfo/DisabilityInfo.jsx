import React from 'react'
import { AdminForm } from 'components'

export default function DisabilityInfo() {
  const [list, setList] = React.useState([])

  return (
    <AdminForm.Inputlist
      title="Информация для людей с ограниченными возможностями"
      buttonText="Добавить информацию"
      onChange={setList}
    />
  )
}
