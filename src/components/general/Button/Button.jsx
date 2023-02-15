import styles from './Button.module.scss'
import { classNames } from 'core/utils'

export default function Button(data) {
  const { text, className, mode, ...props } = data

  return (
    <button
      className={classNames(styles.button, [
        className,
        mode ? 'button_' + mode : '',
      ])}
      {...props}
    >
      <div className={styles.inner}>
        <div className={styles.text}>{text}</div>
      </div>
    </button>
  )
}
