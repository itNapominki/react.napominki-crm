import React from 'react'
import { Input, Select, Textarea } from 'components'

export default function Fluid({ type = 'text', props }) {
  return type === 'SELECT' ? (
    <Select {...props} />
  ) : type === 'TEXTAREA' ? (
    <Textarea {...props} />
  ) : (
    <Input type={type} {...props} />
  )
}
