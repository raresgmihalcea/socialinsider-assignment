import { Router } from 'express'
import fetch from 'node-fetch'
import constants from '../utils/constants.js'
import getReqBody from '../utils/helpers.js'

const postsRouter = Router()

postsRouter.post('/posts', async (req, res) => {
  const postList = await fetch(`${constants.API_URL}`, {
    method: 'post',
    body: JSON.stringify(getReqBody(constants.API_METHODS.getPosts, {
      projectname: constants.API_PROJECTNAME,
      id: req.body.id,
      profile_type: req.body.profileType,
      date: req.body.date
    })),
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer: ${constants.APY_KEY_TEST}` }
  })
  res.json(await postList.json())
})

export default postsRouter
