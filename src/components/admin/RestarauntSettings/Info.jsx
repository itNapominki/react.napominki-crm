import React from 'react'
import { AdminForm, Input } from '../..'

export default function Info({ data }) {
  if (!data) {
    return
  }

  const [address, setAddress] = React.useState(data[0].address)
  const [comment, setComment] = React.useState(data[0].comment)
  const [name, setName] = React.useState(data[0].name)
  const [title, setTitle] = React.useState(data[0].title)
  // const [relatedMetro, setRelatedMetro] = React.useState(data[0].metro)
  const [relatedMetro, setRelatedMetro] = React.useState([])

  return (
    <AdminForm>
      <AdminForm.RestaurantName
        name={name}
        setName={setName}
        title={title}
        setTitle={setTitle}
      />
      <AdminForm.Address address={address} setAddress={setAddress} />
      <AdminForm.Metro
        relatedMetro={relatedMetro}
        setRelatedMetro={setRelatedMetro}
      />
      <AdminForm.Group
        title="Режим работы (для клиента)"
        button={{ text: 'Добавить расписание' }}
      />
      <AdminForm.Group
        title="Информация"
        button={{ text: 'Добавить информацию' }}
      />
      <AdminForm.Group
        title="Информация для людей с ограниченными возможностями"
        button={{ text: 'Добавить информацию' }}
      />
      <AdminForm.Comment comment={comment} setComment={setComment} />
    </AdminForm>
  )
}
