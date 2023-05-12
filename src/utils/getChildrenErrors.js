const getChildrenErrors = (errors, key, replace = []) => {
  return errors
    ?.filter(({ param }) => param.includes(key))
    .map((error) => {
      // work only with variable ???
      let param = error.param.replace(key, '')

      replace.forEach((symbol) => (param = param.replace(symbol, '')))

      return {
        ...error,
        param,
      }
    })
}

export default getChildrenErrors
