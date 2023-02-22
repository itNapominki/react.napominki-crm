const getChildrenErrors = (errors, key) => {
  return errors
    ?.filter(({ param }) => param.includes(key))
    .map((error) => {
      return {
        ...error,
        param: error.param.replace(key, ''),
      }
    })
}

export default getChildrenErrors
