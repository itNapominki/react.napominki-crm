export default function getValue(multiple, value) {
  return multiple
    ? value?.map((elem) => (elem.short ? elem.short : elem.text)).join(', ')
    : value.text
}
