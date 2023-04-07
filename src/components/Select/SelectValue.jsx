import React from 'react'

export default function SelectValue({ multiple, name, value = '' }) {
  return (
    <input
      name={name}
      value={
        multiple
          ? JSON.stringify(value.map(({ value }) => value))
          : typeof value === 'string'
          ? value
          : JSON.stringify(value)
      }
      hidden
      readOnly
    />
  )
}
