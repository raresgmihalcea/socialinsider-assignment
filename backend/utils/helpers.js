const getReqBody = (method, params) => ({
  id: 0,
  method,
  params: {
    ...params
  }
})

export default getReqBody
