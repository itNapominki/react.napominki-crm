import styles from './Spinner.module.scss'
import React from 'react'
import Loader from 'react-spinner-loader'
import { classNames } from 'core/utils'

export default function Spinner({ show, className }) {
  return (
    <div className={classNames(styles.container, [className])}>
      <Loader show={show} />
    </div>
  )
}
