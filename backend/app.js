import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import constants from './utils/constants.js'
import contentRouter from './controllers/brands.js'
import 'express-async-errors'
import postsRouter from './controllers/posts.js'

const app = express()
app.use(cors({ origin: constants.FRONT_URL }))
app.use(helmet())
app.use(express.json())
app.use('/', contentRouter)
app.use('/', postsRouter)

export default app
