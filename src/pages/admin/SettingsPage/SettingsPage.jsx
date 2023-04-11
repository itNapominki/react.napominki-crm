import React from 'react'
import { AdminForm } from 'components'

import { api } from 'core/utils'
import { useErrors } from 'hooks'

export default function SettingsPage() {
  const [offerCount, setOfferCount] = React.useState('')

  const [error, setError] = React.useState({})
  const offerCountError = useErrors(error.errors, 'offerCount')

  React.useEffect(() => {
    api
      .getAll({ model: 'settings' })
      .then(({ data }) => setOfferCount(data.offerCount))
  }, [])

  if (error.message) {
    alert(error.message)
    setError({ errors: error.errors })
  }

  return (
    <AdminForm
      title="Настройки"
      model="settings"
      id={false}
      onError={setError}
      onSave={() => setError({})}
    >
      <AdminForm.Group>
        <AdminForm.Control
          type="number"
          label={{ text: 'Количество ресторанов в предложении', size: 'big' }}
          name="offerCount"
          value={offerCount}
          onInput={setOfferCount}
          className="col col-12"
          error={{ text: offerCountError, down: true }}
        />
      </AdminForm.Group>
    </AdminForm>
  )
}
