import React from 'react'

export default function LazyPage({ Component }) {
  return <React.Suspense>{Component}</React.Suspense>
}
