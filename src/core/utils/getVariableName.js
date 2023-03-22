export const getVariableName = (f) => f.toString().replace(/[ |\(\)=>]/g, '')

export const getObjKeyName = (f) =>
  f
    .toString()
    .replace(/[ |\(\)=>{}]/g, '')
    .split('.')
    .pop()
