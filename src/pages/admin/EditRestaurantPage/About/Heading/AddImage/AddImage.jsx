import React from 'react'

import { AdminForm } from 'components'
import { Fluid } from './'

import { useUpload } from './hooks'

export default function AddImage({ value, setValue, error }) {
  const [background, setBackground] = React.useState('')
  const [uploaded, handleUpload] = useUpload()

  React.useEffect(() => setBackground(value), [value])

  return (
    <label>
      <AdminForm.Control containerTag="div" label="Превью" error={error}>
        <Fluid background={background} uploaded={uploaded} />
      </AdminForm.Control>

      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => handleUpload(e, setBackground, setValue)}
        hidden
      />

      <input type="hidden" name="preview" value={value} readOnly />
    </label>
  )
}
