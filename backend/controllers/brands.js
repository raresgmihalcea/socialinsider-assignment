import { Router } from 'express'
import fetch from 'node-fetch'
import constants from '../utils/constants.js'
import getReqBody from '../utils/helpers.js'

const brandsRouter = Router()

brandsRouter.get('/brands', async (req, res) => {
  const brandList = await fetch(`${constants.API_URL}`, {
    method: 'post',
    body: JSON.stringify(getReqBody(constants.API_METHODS.getBrands, {
      projectname: constants.API_PROJECTNAME
    })),
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer: ${constants.APY_KEY_TEST}` }
  })
  res.json(await brandList.json())
})

export default brandsRouter
