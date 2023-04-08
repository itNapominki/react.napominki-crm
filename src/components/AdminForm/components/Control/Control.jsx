import styles from './Control.module.scss'
import React from 'react'

import { Bottom, Fluid, Top } from './'
import { classNames } from 'core/utils'

export default React.memo(function Control({
  action,
  containerTag = 'label',
  className,
  children,
  label,
  error,
  style,
  type,
  ...props
}) {
  const Container = containerTag

  return (
    <Container
      className={classNames(styles.container, [className])}
      style={style}
    >
      <Top label={label} error={error} />

      {children ? children : <Fluid type={type} props={props} />}

      <Bottom action={action} error={error} />
    </Container>
  )
})
