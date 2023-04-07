import React from 'react'
import { AdminForm } from 'components'
import { Phone, Telegram, Viber, WhatsApp } from './components'

export default function Contacts() {
  return (
    <AdminForm.Group title="Контакты">
      <Phone />
      <WhatsApp />
      <Telegram />
      <Viber />
    </AdminForm.Group>
  )
}
