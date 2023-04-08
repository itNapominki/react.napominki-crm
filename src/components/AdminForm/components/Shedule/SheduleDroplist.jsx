import styles from './Shedule.module.scss'
import React from 'react'

import { DottedButton, Droplist } from 'components'

export default function SheduleDroplist({ onRemove }) {
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  return (
    <React.Fragment>
      <DottedButton
        className={styles.burgerButton}
        onClick={() => setDroplistVisible(!droplistVisible)}
      />
      <Droplist
        visible={droplistVisible}
        className={styles.droplist}
        setVisible={setDroplistVisible}
        items={[
          {
            text: 'Удалить',
            color: 'red',
            onClick: onRemove,
          },
        ]}
      />
    </React.Fragment>
  )
}
