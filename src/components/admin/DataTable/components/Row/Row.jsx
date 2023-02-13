import React from 'react'
import { Droplist } from 'components'
import Col from '../Col/Col'

export default function Row({ cols, row, droplist, id }) {
  console.log('render Row')

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
      {cols.map(({ key, percentWidth }) => {
        const text =
          typeof key === 'string'
            ? row[key]
            : key.map((el) => row[el]).join(' ')

        return <Col key={key} text={text} percentWidth={percentWidth} />
      })}

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

      {droplistVisible && (
        <Droplist visible={droplistVisible} items={droplistWithId} />
      )}
    </div>
  )
}
