import styles from './Control.module.scss'
import React from 'react'

import { Bottom, Fluid, Top } from './'
import { classNames } from 'utils'

export default React.memo(function Control({
  action,
  className,
  children,
  label,
  error,
  style,
  type,
  containerTag = type === 'SELECT' ? 'div' : 'label',
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
