import styles from './AdminDataTable.module.scss'
import React from 'react'

export default React.memo(function Col({ text, percentWidth }) {
  return (
    <div className={styles.col} style={{ flexBasis: percentWidth + '%' }}>
      {text}
    </div>
  )
})
