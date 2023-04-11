import styles from './Halls.module.scss'
import React from 'react'

import { AdminForm } from 'components'
import { Gallery, MainGroup } from './'

export default function Hall({
  name,
  hall,
  errors,
  handleFilesChange,
  handleInput,
  handleInputList,
  handleImageRemove,
  handleRemove,
  title,
}) {
  const [info, setInfo] = React.useState(hall.info)

  React.useEffect(() => handleInputList(info), [info])
  React.useEffect(() => {
    if (hall.info !== info) {
      setInfo(hall.info)
    }
  }, [hall.info])

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.title}>{title}</div>
        <div className={styles.removeButton} onClick={handleRemove}>
          Удалить зал
        </div>
      </div>

      <MainGroup
        name={name}
        title={hall.title}
        boarding={hall.boarding}
        fit={hall.fit}
        errors={errors}
        onInput={(key, value) => handleInput(key, value)}
      />

      <AdminForm.Inputlist
        title="Информация"
        buttonText="Добавить информацию"
        name={name + '.info'}
        info={info}
        setInfo={setInfo}
        errors={errors}
      />

      <AdminForm.Group title="Комментарий">
        <AdminForm.Control
          type="TEXTAREA"
          name={name + '.comment'}
          value={hall.comment}
          onInput={(value) => handleInput('comment', value)}
          className="col col-12"
        />
      </AdminForm.Group>

      <Gallery
        gallery={hall.gallery}
        handleFilesChange={handleFilesChange}
        handleImageRemove={handleImageRemove}
        name={name + '.gallery'}
      />
    </div>
  )
}
