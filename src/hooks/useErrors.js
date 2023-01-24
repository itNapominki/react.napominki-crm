export default function useErrors(errors, reference) {
  const hasErrors = errors
  const arr = hasErrors ? errors.errors : null
  const instance = arr ? arr.find((error) => error.param === reference) : false

  const error = instance ? instance.msg : false

  return error
}
