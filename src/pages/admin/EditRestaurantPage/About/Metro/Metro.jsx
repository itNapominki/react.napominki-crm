import styles from './Metro.module.scss'
import React from 'react'

import { AdminForm } from 'components'
import { Station } from '.'

import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { handleAdd } from './handlers'

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
        {related?.map((station, i) => {
          const name = `clientInfo.relatedMetro[${i}]`

          return (
            <div className="col col-6" key={i}>
              <div className={styles.row}>
                <AdminForm.Control
                  type="SELECT"
                  className={styles.name}
                  options={[]}
                  value={station.title}
                  onChange={() => console.log(1)}
                />
                <AdminForm.Control type="number" className={styles.distance} />
              </div>
            </div>
          )

          return (
            <div key={i} className="col col-4">
              <Station station={station} name={name} errors={errors} />
            </div>
          )
        })}
      </AdminForm.Group>
    </React.Fragment>
  )
}
