export default function Col(data) {
  const { text, percentWidth } = data

  return (
    <div className="datatable__col" style={{ flexBasis: percentWidth + '%' }}>
      {text}
    </div>
  )
}
