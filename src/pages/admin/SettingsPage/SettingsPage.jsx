import React from 'react'
import { AdminForm, Input } from 'components'

export default function SettingsPage() {
  return (
    <AdminForm
      title="Настройки"
      onCancel={{ callback: () => console.log(1) }}
      onSave={() => console.log(1)}
      onError={() => console.log(1)}
    >
      <AdminForm.Group>
        {/* <Input
          label="Количество ресторанов в предложении"
          bigLabel
          type="number"
          className="col col-12"
        /> */}
        <AdminForm.Control
          type="text"
          label={{ text: '1234', size: 'big' }}
          className="col col-12"
          error={{ text: '1234', down: true }}
        />
      </AdminForm.Group>
    </AdminForm>
  )
}
