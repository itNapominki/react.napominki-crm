import React from 'react'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'
import { Comment, Gallery, Info, MainGroup } from './components'

export default function Hall(data) {
  const { halls, setHalls, i } = data

  const context = React.useContext(EditRestaurantContext)
  const { serverData } = context

  const [initialHalls] = useServerData(serverData, `halls`)
  const title =
    initialHalls && initialHalls[i]
      ? initialHalls[i].title
      : `Новый зал ${i + 1}`

  function handleRemove() {
    setHalls((prev) => prev.filter((_, index) => index != i))
  }

  return (
    <div className="admin-form-halls__item">
      <div className="admin-form-halls__item-top">
        <h2 className="admin-form-halls__item-title">{title}</h2>
        <button
          className="admin-form-halls__item-remove"
          onClick={handleRemove}
        >
          Удалить зал
        </button>
      </div>

      <MainGroup halls={halls} setHalls={setHalls} i={i} />
      <Info halls={halls} setHalls={setHalls} i={i} />
      <Comment halls={halls} setHalls={setHalls} i={i} />
      <Gallery halls={halls} setHalls={setHalls} i={i} />
    </div>
  )
}
