export default function phoneMask(value) {
  let masked = value
  masked = value.replace(/\D/g, '')
  masked = masked.replace(/(\d)(\d{3})$/, '$1 км. $2')
  return masked + ' м.'
}
