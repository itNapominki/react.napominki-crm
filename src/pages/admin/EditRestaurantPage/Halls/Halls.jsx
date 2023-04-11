import React from 'react'

import { AdminForm } from 'components'
import { Hall } from './'

import {
  handleAdd,
  handleFilesChange,
  handleInput,
  handleInputList,
  handleImageRemove,
  handleRemove,
} from './handlers'

import { useInitial } from 'hooks'
import { EditRestaurantContext } from 'core/context'

import styles from './Halls.module.scss'

export default function Halls() {
  console.log('render EditRestaurant Halls')

  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [halls, setHalls] = useInitial(initial, 'halls', [])

  return (
    <div className={styles.container}>
      <AdminForm.Group
        button={{
          text: 'Добавить новый зал',
          onClick: () => handleAdd(setHalls),
        }}
      >
        <div className="col col-12">
          {halls?.map((hall, i) => (
            <Hall
              key={i}
              hall={hall}
              name={`halls[${i}]`}
              title={hall.title ? hall.title : `Новый зал ${i + 1}`}
              handleFilesChange={(e, setGallery) =>
                handleFilesChange(e, setGallery, setHalls, i)
              }
              handleInput={(key, value) => handleInput(setHalls, key, value, i)}
              handleInputList={(info) => handleInputList(setHalls, info, i)}
              handleImageRemove={(j, setGallery) =>
                handleImageRemove(j, setGallery, i, setHalls)
              }
              handleRemove={() => handleRemove(setHalls, i)}
              errors={errors}
            />
          ))}
        </div>
      </AdminForm.Group>
    </div>
  )
}
