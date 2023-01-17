import { useFetch } from 'hooks'
import React from 'react'
import { AdminForm, AdminLayout, Input, Select } from '../../components'

export default function EditObject() {
  const types = useFetch('/object-types', [])

  const [type, setType] = React.useState({ text: '', value: '' })
  const [address, setAddress] = React.useState()

  React.useEffect(() => {
    if (types.length > 0) {
      setType(types[0])
    }
  }, [types])

  return (
    <AdminLayout>
      <AdminForm title="Добавление объекта">
        <AdminForm.Group>
          <Select
            label="Тип объекта"
            value={type}
            options={types}
            onChange={setType}
            className="col col-12 "
          />
        </AdminForm.Group>
        <AdminForm.Address setAddress={setAddress} />
      </AdminForm>
    </AdminLayout>
  )
}
