import styles from './Hall.module.scss'
import React from 'react'

import { AdminForm, Textarea } from 'components'
import { Gallery, MainGroup } from './components'

import { handleAddInfo, handleInput } from './handlers'

export default function Hall({ name, hall, errors, handleRemove, setHalls }) {
  const index = +name.split('[').pop().split(']')[0]
  const title = hall.title ? hall.title : `Новый зал ${index + 1}`

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
        name={name}
        title={hall.title}
        boarding={hall.boarding}
        fit={hall.fit}
        errors={errors}
        onInput={(key, value) => handleInput(setHalls, key, value, index)}
      />

      <AdminForm.Inputlist
        name={name + '.info'}
        title="Информация"
        buttonText="Добавить информацию"
        onChange={(array) => handleAddInfo(setHalls, array, index)}
        errors={errors}
        initial={hall.info}
      />

      <AdminForm.Group title="Комментарий">
        <Textarea
          name={name + '.comment'}
          value={hall.comment}
          onInput={(value) => handleInput(setHalls, 'comment', value, index)}
          className="col col-12"
        />
      </AdminForm.Group>

      <Gallery
        gallery={hall.gallery}
        setHalls={setHalls}
        index={index}
        name={name + '.gallery'}
      />
    </div>
  )
}
