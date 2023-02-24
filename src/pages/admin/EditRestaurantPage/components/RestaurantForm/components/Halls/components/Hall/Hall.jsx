import React from 'react'
import { Comment, Gallery, Info, MainGroup } from './components'

import styles from './Hall.module.scss'

export default function Hall({ hall, errors, index, setHalls, initial }) {
  const title =
    initial && initial[index] ? initial[index].title : `Новый зал ${index + 1}`

  function handleRemove() {
    setHalls((prev) => prev.filter((_, i) => index != i))
  }

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.title}>{title}</div>
        <button className={styles.removeButton} onClick={handleRemove}>
          Удалить зал
        </button>
      </div>

      <MainGroup
        title={hall.title}
        boarding={hall.boarding}
        fit={hall.fit}
        errors={errors}
        setHalls={setHalls}
        index={index}
      />
      <Info
        info={hall.info}
        errors={errors}
        setHalls={setHalls}
        index={index}
      />
      <Comment text={hall.comment} setHalls={setHalls} index={index} />
      <Gallery initial={hall.gallery} setHalls={setHalls} index={index} />
    </div>
  )
}
