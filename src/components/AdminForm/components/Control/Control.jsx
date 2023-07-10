import styles from './Control.module.scss'
import React from 'react'

import { Bottom, Fluid, Top, ListsResultSearch } from './'
import { classNames } from 'utils'

export default React.memo(function Control({
  actionGiveAdressOsm,
  actionGoToYandexMap,
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

      <Bottom action={actionGiveAdressOsm} error={error} />
      <Bottom action={actionGoToYandexMap} error={error} />
    </Container>
  )
})
