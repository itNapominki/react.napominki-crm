import styles from './Metro.module.scss'
import React from 'react'

import { AdminForm } from 'components'
import { StationDistance, StationDroplist, StationSelect } from '.'

import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import {
  handleAdd,
  handleInput,
  handleRemove,
  handleSelectChange,
} from './handlers'

export default function Metro() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [related, setRelated] = useInitial(
    initial,
    'clientInfo.relatedMetro',
    []
  )

  return (
    <React.Fragment>
      <AdminForm.Group
        title="Связанные метро"
        button={{ text: 'Добавить', onClick: () => handleAdd(setRelated) }}
      >
        {related?.map(({ title, distance }, i) => {
          const name = `clientInfo.relatedMetro[${i}]`

          return (
            <div className="col col-6" key={i}>
              <div className={styles.station}>
                <StationDroplist onRemove={() => handleRemove(setRelated, i)} />
                <StationSelect
                  name={name + '.title'}
                  title={title}
                  onChange={(value) => handleSelectChange(value, setRelated, i)}
                  errors={errors}
                />
                <StationDistance
                  name={name + '.distance'}
                  distance={distance}
                  onInput={(value) => handleInput(value, setRelated, i)}
                  errors={errors}
                />
              </div>
            </div>
          )
        })}
      </AdminForm.Group>
    </React.Fragment>
  )
}
