export default function Col({ text, percentWidth }) {
  return (
    <div className="datatable__col" style={{ flexBasis: percentWidth + '%' }}>
      {text}
    </div>
  )
}
