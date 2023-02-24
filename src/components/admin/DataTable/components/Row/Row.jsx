import React from 'react'
import { Droplist } from 'components'
import Col from '../Col/Col'

export default React.memo(function Row({ cols, row }) {
  console.log('render Row')

  const [droplistVisible, setDroplistVisible] = React.useState(false)

  return (
    <div className="datatable__row">
      {cols.map(({ key, percentWidth }) => {
        const text =
          typeof key === 'string'
            ? row[key]
            : key.map((el) => row[el]).join(' ')

        return <Col key={key} text={text} percentWidth={percentWidth} />
      })}

      {row.droplist && (
        <button
          className="datatable__button"
          onClick={() => setDroplistVisible(!droplistVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {droplistVisible && (
        <Droplist visible={droplistVisible} items={row.droplist} />
      )}
    </div>
  )
})
