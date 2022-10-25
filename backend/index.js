import http from 'http'
import app from './app.js'
import logger from './middleware/logger.js'
import constants from './utils/constants.js'

const server = http.createServer(app)

server.listen(constants.PORT, () => {
  logger.info(`Server running on port ${constants.PORT}`)
})
