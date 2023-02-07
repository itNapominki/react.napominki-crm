import React from 'react'
import { Comment, Gallery, Info, MainGroup } from './components'

export default function Hall(data) {
  const { halls, setHalls, i } = data

  return (
    <React.Fragment>
      <MainGroup halls={halls} setHalls={setHalls} i={i} />
      <Info halls={halls} setHalls={setHalls} i={i} />
      <Comment halls={halls} setHalls={setHalls} i={i} />
      <Gallery halls={halls} setHalls={setHalls} i={i} />
    </React.Fragment>
  )
}
