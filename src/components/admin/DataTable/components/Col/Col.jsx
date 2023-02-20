import React from 'react'

export default React.memo(function Col({ text, percentWidth }) {
  return (
    <div className="datatable__col" style={{ flexBasis: percentWidth + '%' }}>
      {text}
    </div>
  )
})
