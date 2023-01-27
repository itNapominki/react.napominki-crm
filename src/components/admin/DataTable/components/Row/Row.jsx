import React from 'react'
import { Droplist } from 'components'
import Col from '../Col/Col'

export default function Row(data) {
  console.log('render Row')

  const { cols, row, droplist, id = undefined } = data
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const droplistWithId = droplist.map((item) => {
    const { onClick } = item

    return {
      ...item,
      onClick: id && onClick ? onClick.bind(null, id) : onClick,
    }
  })

  return (
    <div className="datatable__row">
      {cols.map(({ key, percentWidth }) => (
        <Col key={key} text={row[key]} percentWidth={percentWidth} />
      ))}

      {droplist && (
        <button
          className="datatable__button"
          onClick={() => setDroplistVisible(!droplistVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {droplistVisible && <Droplist items={droplistWithId} />}
    </div>
  )
}
