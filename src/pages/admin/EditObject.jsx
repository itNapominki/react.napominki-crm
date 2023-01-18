import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import { api } from 'utils'
import { AdminForm, AdminLayout, Input, Select } from 'components'

export default function EditObject() {
  const navigate = useNavigate()

  const { id } = useParams()
  const isEdit = id ? true : false
  const data = id ? useFetch('/objects/' + id) : null

  const types = useFetch('/object-types', [])

  console.log(types)

  const defaultSelect = { id: null, text: '', value: '' }
  const [initialAddress, setInitialAddress] = React.useState({
    region: defaultSelect,
    city: defaultSelect,
    county: defaultSelect,
    district: defaultSelect,
    street: '',
    house: '',
    floor: '',
    coordinates: '',
  })

  const [address, setAddress] = React.useState(initialAddress)
  const [name, setName] = React.useState('')
  const [type, setType] = React.useState(defaultSelect)

  React.useEffect(() => {
    if (types.length > 0) {
      setType(types[0])
    }
  }, [types])

  React.useEffect(() => {
    if (data) {
      const { address, name, object_type_id } = data
      const type = types.filter(({ id }) => id === object_type_id)[0]

      setAddress(address)
      setName(name)
      setType(type)

      setInitialAddress(address)
    }
  }, [data, types])

  async function handleSave() {
    const data = { name, address, objectTypeId: type.id }

    if (id) {
      return await api.objects
        .update(id, data)
        .then((res) => {
          console.log(res)
          navigate('/admin')
        })
        .catch((error) => console.log(error))
    }

    await api.objects
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

  async function handleRemove() {
    if (window.confirm('Подтвердите удаление объекта')) {
      await api.objects.remove(id).then((res) => {
        console.log(res)
        navigate('/admin')
      })
    }
  }

  const formTitle = isEdit ? 'Редактирование объекта' : 'Добавление объекта'

  const removeBtn = isEdit
    ? { text: 'Удалить объект', onClick: handleRemove }
    : null

  return (
    <AdminLayout>
      <AdminForm
        title={formTitle}
        onSave={handleSave}
        onCancel={handleCancel}
        removeBtn={removeBtn}
      >
        <AdminForm.Group>
          <Select
            label="Тип объекта"
            value={type}
            options={types}
            onChange={setType}
            className="col col-12 "
          />
          <Input
            label="Название объекта"
            onInput={setName}
            value={name}
            className="col col-12 "
          />
        </AdminForm.Group>
        <AdminForm.Address
          initialAddress={initialAddress}
          setAddress={setAddress}
        />
      </AdminForm>
    </AdminLayout>
  )
}
