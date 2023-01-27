import './Button.scss'
import { classNames } from 'utils'

export default function Button(data) {
  const { text, className, mode, ...props } = data

  return (
    <button
      className={classNames('button', [
        className,
        mode ? 'button_' + mode : '',
      ])}
      {...props}
    >
      <div className="button__inner">
        <div className="button__text">{text}</div>
      </div>
    </button>
  )
}
