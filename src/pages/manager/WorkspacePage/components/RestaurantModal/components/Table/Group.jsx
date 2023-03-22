import styles from './Table.module.scss'

export default function Group({ children, title, rows }) {
  const show = rows || children

  if (!show) {
    return
  }

  return (
    <div className={styles.group}>
      {title && <div className={styles.title}>{title}</div>}

      {rows &&
        rows
          .filter((row) => row.indexOf(undefined) === -1)
          .map((row, i) => (
            <div key={i} className={styles.row}>
              <Col inner={row[0]} />
              <Col inner={row[1]} />
            </div>
          ))}

      {children}
    </div>
  )
}

function Col({ inner }) {
  return (
    <div
      className={styles.col}
      dangerouslySetInnerHTML={{ __html: inner }}
    ></div>
  )
}
