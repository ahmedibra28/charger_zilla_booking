import { MessageData } from '../types/socket'
import { Socket } from 'socket.io'

export const messages = {
  sendMessage: (socket: Socket, data: MessageData, io: any) => {
    const { to, message } = data

    io.to(to).emit('receive_message', { from: socket.id, message })
  },
}
