import styles from './Button.module.scss'
import { classNames } from 'core/utils'

export default function Button(data) {
  const { text, className, mode, ...props } = data

  return (
    <button
      className={classNames(styles.button, [className, mode && '_' + mode])}
      {...props}
    >
      <span className={styles.inner}>{text}</span>
    </button>
  )
}
