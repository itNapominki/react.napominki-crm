import './DataTable.scss'
import React from 'react'
import { Col, Row } from './components'

export default React.memo(function DataTable(data) {
  const { title, rows = [], cols = [], droplist } = data

  return (
    <div className="datatable">
      <div className="datatable__title">{title}</div>
      <div className="datatable__table">
        <div className="datatable__row datatable__row_heading">
          {cols.map(({ key, name, percentWidth }) => (
            <Col key={key} text={name} percentWidth={percentWidth} />
          ))}
        </div>

        {rows.map((row, i) => (
          <Row key={i} cols={cols} row={row} id={row.id} droplist={droplist} />
        ))}
      </div>
    </div>
  )
})
