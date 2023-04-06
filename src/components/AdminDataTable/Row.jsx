import styles from './AdminDataTable.module.scss'
import React from 'react'

import { Droplist } from 'components'
import { Col } from './'

export default React.memo(function Row({ cols, row }) {
  console.log('render Row')

  const [droplistVisible, setDroplistVisible] = React.useState(false)

  return (
    <div className={styles.row}>
      {cols.map(({ key, percentWidth }) => {
        const text =
          typeof key === 'string'
            ? row[key]
            : key.map((el) => row[el]).join(' ')

        return <Col key={key} text={text} percentWidth={percentWidth} />
      })}

      {row.droplist && (
        <button
          className={styles.dotted}
          onClick={() => setDroplistVisible(!droplistVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {droplistVisible && (
        <Droplist
          visible={droplistVisible}
          setVisible={setDroplistVisible}
          items={row.droplist}
          className={styles.droplist}
        />
      )}
    </div>
  )
})
