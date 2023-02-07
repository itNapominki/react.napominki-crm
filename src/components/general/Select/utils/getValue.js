export default function getValue(multiple, value) {
  return !value
    ? ''
    : multiple
    ? value?.map((elem) => (elem.short ? elem.short : elem.text)).join(', ')
    : value.text
}
