import './Layout.scss'
import { classNames } from 'utils'

export default function Layout(data) {
  const { children, pageClass = false } = data

  return <div className={classNames('page', [pageClass])}>{children}</div>
}
