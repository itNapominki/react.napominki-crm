export default function createDroplist(options, onChange) {
  return options.map((option, i) => {
    return {
      ...option,
      onClick: () => onChange(option.value, i),
    }
  })
}
