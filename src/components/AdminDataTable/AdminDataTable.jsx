import styles from './AdminDataTable.module.scss'
import React from 'react'

import { Col, Row } from './'

export default React.memo(function AdminDataTable({
  title,
  rows = [],
  cols = [],
}) {
  return (
    <React.Fragment>
      <div className={styles.title}>{title}</div>
      <div className={styles.table}>
        <div className={[styles.row, styles.row_heading].join(' ')}>
          {cols.map(({ key, name, percentWidth }) => (
            <Col key={key} text={name} percentWidth={percentWidth} />
          ))}
        </div>

        {rows.map((row, i) => (
          <Row key={i} cols={cols} row={row} />
        ))}
      </div>
    </React.Fragment>
  )
})
