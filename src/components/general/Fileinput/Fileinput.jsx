import './Fileinput.scss'
import React from 'react'

export default function Fileinput(data) {
  const { accept, multiple, onChange } = data

  function uploadFile(event) {
    let files = event.target.files

    if (onChange) {
      onChange(files)
    }
  }

  return (
    <input
      type="file"
      onChange={uploadFile}
      accept={accept}
      multiple={multiple}
    />
  )
}
