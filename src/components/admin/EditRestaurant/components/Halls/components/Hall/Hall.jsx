import React from 'react'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { Comment, Gallery, Info, MainGroup } from './components'

import styles from './Hall.module.scss'

export default function Hall(data) {
  const { halls, setHalls, i } = data

  const context = React.useContext(EditRestaurantContext)
  const { initial } = context

  const [initialHalls] = useInitial(initial, `halls`)
  const title =
    initialHalls && initialHalls[i]
      ? initialHalls[i].title
      : `Новый зал ${i + 1}`

  function handleRemove() {
    setHalls((prev) => prev.filter((_, index) => index != i))
  }

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.title}>{title}</div>
        <button className={styles.removeButton} onClick={handleRemove}>
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
