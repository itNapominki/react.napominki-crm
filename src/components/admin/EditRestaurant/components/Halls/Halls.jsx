import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { Hall } from './components'
import { handleAdd } from './utils'
import { useInitial } from 'hooks'

import styles from './Halls.module.scss'

export default function Halls() {
  console.log('render EditRestaurant Halls')

  const context = React.useContext(EditRestaurantContext)
  const { setData, initial, errors } = context

  const [initialState] = useInitial(initial, 'halls', [])
  const [halls, setHalls] = React.useState([])

  React.useEffect(() => setHalls(initialState), [initialState])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        halls,
      }
    })
  }, [halls])

  return (
    <div className={styles.container}>
      <AdminForm.Group
        button={{
          text: 'Добавить новый зал',
          onClick: () => handleAdd(setHalls),
        }}
      >
        <div className="col col-12">
          {halls?.map((_, i) => {
            return (
              <Hall
                key={i}
                halls={halls}
                setHalls={setHalls}
                errors={errors}
                i={i}
              />
            )
          })}
        </div>
      </AdminForm.Group>
    </div>
  )
}
