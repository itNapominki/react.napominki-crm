import React from 'react'

import { AdminForm } from 'components/admin'
import { Hall } from './components'

import { handleAdd } from './handlers'
import { useInitial } from 'hooks'
import { EditRestaurantContext } from 'core/context'

import styles from './Halls.module.scss'

export default function Halls() {
  console.log('render EditRestaurant Halls')

  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const initialState = useInitial(initial, 'halls', [])
  const [halls, setHalls] = React.useState([])
  React.useEffect(() => setHalls(initialState), [initialState])

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
              setHalls={setHalls}
              errors={errors}
              name={`halls[${i}]`}
            />
          ))}
        </div>
      </AdminForm.Group>
    </div>
  )
}
