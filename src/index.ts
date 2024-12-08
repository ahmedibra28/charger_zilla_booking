import express from 'express'
import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import helmet from 'helmet'
import morgan from 'morgan'
import { CORS_OPTIONS, PORT } from './config/env'
import { errorHandler } from './middleware/errorHandler'
import routes from './routes'
import { setupSocket } from './socket/setupSocket'

const app = express()
const server = http.createServer(app)
const io = new SocketIOServer(server, {
  cors: CORS_OPTIONS,
})

// Middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)
app.use(errorHandler)

// Setup Socket.IO
setupSocket(io)

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
