module.exports = wrapApi = (obj, errCode, errStack) => {
  if (errCode) {
    console.log(errStack)
    return {
      result: 'error',
      code: errCode,
      msg: ''
    }
  }
  return {
    result: 'success',
    data: obj
  }
}