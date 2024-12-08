import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000
export const CORS_OPTIONS = {
  origin: '*',
  methods: ['GET', 'POST'],
}
