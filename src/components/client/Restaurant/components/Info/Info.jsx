import React from 'react'
import { ClientCard } from 'components'
import { About, Heading } from './components'

export default function Info() {
  return (
    <ClientCard>
      <div className="cm-restaurant">
        <Heading />
        <About />
      </div>
    </ClientCard>
  )
}
