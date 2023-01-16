import React from 'react'
import { AdminForm, AdminLayout, Alert, Input, Select } from 'components'
import { api, generatePassword } from 'utils'
import { useFetch } from 'hooks'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditUser() {
  console.log('render EditUser')

  const navigate = useNavigate()

  const { id } = useParams()
  const data = id ? useFetch('/users/' + id) : null
  const isEdit = id ? true : false

  const [role, setRole] = React.useState({ text: 'Менеджер', value: 'MANAGER' })
  const [fullname, setFullname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

  React.useEffect(() => {
    if (data) {
      setRole(data.role)
      setFullname(data.fullname)
      setEmail(data.email)
      setPhone(data.phone)
    }
  }, [data])

  function handleGeneratePassword() {
    const password = generatePassword()

    setPassword(password)
    setRepeatPassword(password)
  }

  async function handleSave() {
    const data = { role: role, fullname, email, phone, password }

    if (id) {
      return await api.users
        .update(id, data)
        .then((res) => {
          console.log(res)
          navigate('/admin')
        })
        .catch((error) => console.log(error))
    }

    await api.users
      .create(data)
      .then((res) => {
        console.log(res)
        navigate('/admin')
      })
      .catch((error) => console.log(error))
  }

  function handleCancel() {
    navigate('/admin')
  }

  function handleRemove() {
    alert('Удалить')
  }

  const formTitle = isEdit
    ? 'Редактирование пользователя'
    : 'Добавление пользователя'

  const removeBtn = isEdit
    ? { text: 'Удалить пользователя', onClick: handleRemove }
    : null

  return (
    <AdminLayout>
      <Alert.Confirm success={''} cancel={''} />
      <AdminForm
        title={formTitle}
        onSave={handleSave}
        onCancel={handleCancel}
        removeBtn={removeBtn}
      >
        <AdminForm.Group>
          <Select
            label="Тип пользователя"
            value={role}
            options={[
              { text: 'Менеджер', value: 'MANAGER' },
              { text: 'Редактор', value: 'REDAKTOR' },
              { text: 'Админ', value: 'ADMIN' },
            ]}
            onChange={setRole}
            className="col col-12 "
          />
          <Input
            type="text"
            label="ФИО"
            value={fullname}
            onInput={setFullname}
            className="col col-12 "
          />
          <Input
            type="email"
            label="Email"
            value={email}
            onInput={setEmail}
            className="col col-6"
          />
          <Input
            type="tel"
            label="Телефон"
            value={phone}
            onInput={setPhone}
            className="col col-6"
          />
          <Input
            type="text"
            label="Пароль"
            action={{
              text: 'Сгенерировать пароль',
              onClick: handleGeneratePassword,
            }}
            value={password}
            onInput={setPassword}
            className="col col-6"
          />
          <Input
            type="text"
            label="Повторите пароль"
            value={repeatPassword}
            onInput={setRepeatPassword}
            className="col col-6"
          />
        </AdminForm.Group>
      </AdminForm>
    </AdminLayout>
  )
}
