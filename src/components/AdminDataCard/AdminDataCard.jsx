import styles from './AdminDataCard.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import { Separator, Spinner } from 'components'

export default function AdminDataCard({ children, fetching, link }) {
  return (
    <div className={styles.container}>
      {link && (
        <Link to={link.path} className={styles.link}>
          {link.text}
        </Link>
      )}

      {children.length
        ? children.map((child, i) => (
            <React.Fragment key={i}>
              {child}
              {i < children.length - 1 && <Separator />}
            </React.Fragment>
          ))
        : children}

      <Spinner show={fetching} />
    </div>
  )
}
