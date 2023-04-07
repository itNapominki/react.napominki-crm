import styles from './Control.module.scss'
import React from 'react'

import { Bottom, Fluid, Top } from './'
import { classNames } from 'core/utils'

export default React.memo(function Control({
  action,
  className,
  label,
  error,
  type,
  ...props
}) {
  return (
    <label className={classNames(styles.container, [className])}>
      <Top label={label} error={error} />
      <Fluid type={type} props={props} />
      <Bottom action={action} error={error} />
    </label>
  )
})
