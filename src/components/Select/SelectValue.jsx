import React from 'react'

export default function SelectValue({ name, value = '' }) {
  return (
    <input
      name={name}
      value={typeof value === 'string' ? value : JSON.stringify(value)}
      hidden
      readOnly
    />
  )
}
