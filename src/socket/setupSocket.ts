import { Server as SocketIOServer } from 'socket.io'
import { messages } from '../controllers/messages'

export const setupSocket = (io: SocketIOServer) => {
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on('send_message', (data) => {
      messages.sendMessage(socket, data, io)
    })

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`)
    })
  })
}
