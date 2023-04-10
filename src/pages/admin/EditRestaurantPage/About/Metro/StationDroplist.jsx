import styles from './Metro.module.scss'
import React from 'react'

import { DottedButton, Droplist } from 'components'

export default function StationDroplist({ onRemove }) {
  const [visible, setVisible] = React.useState(false)

  return (
    <React.Fragment>
      <DottedButton
        className={styles.dottedButton}
        onClick={() => setVisible(!visible)}
      />
      <Droplist
        className={styles.droplist}
        visible={visible}
        setVisible={setVisible}
        items={[{ text: 'Удалить', onClick: onRemove, color: 'red' }]}
      />
    </React.Fragment>
  )
}
