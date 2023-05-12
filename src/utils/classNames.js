export default function classNames(string, conditions = []) {
  let className = string

  for (let condition of conditions) {
    if (condition) {
      className += ' ' + condition
    }
  }

  return className
}
