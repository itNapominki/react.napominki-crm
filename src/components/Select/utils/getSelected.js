export default function getSelected(multiple, options, value, search) {
  return multiple
    ? options
        .map((_, i) => i)
        .filter((i) => value.indexOf(options[i].value) !== -1)
    : [options.findIndex((option) => option.value === value) + (search ? 1 : 0)]
}
