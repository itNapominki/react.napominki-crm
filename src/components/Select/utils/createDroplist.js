export default function createDroplist(
  options,
  multiple,
  handleChooseOption,
  onChange
) {
  return options.map((option, i) => ({
    ...option,
    onClick: () =>
      multiple ? handleChooseOption(option.value, i) : onChange(option.value),
  }))
}
