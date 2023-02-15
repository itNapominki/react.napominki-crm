import React from 'react'
import { AdminForm, Separator } from 'components'
import { EditRestaurantContext } from 'core/context'
import { Hall } from './components'
import { handleAdd } from './utils'
import { useInitial } from 'core/hooks'

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
      <Separator />

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

      <button className={styles.buttonAdd} onClick={() => handleAdd(setHalls)}>
        Добавить новый зал
      </button>
    </div>
  )
}
