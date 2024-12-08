declare global {
  namespace Express {
    interface Request {}
  }
}

export interface MessageData {
  to: string
  message: string
}
