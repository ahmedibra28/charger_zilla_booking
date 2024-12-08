import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      DATABASE_URL: string
      JWT_SECRET: string
      SMTP_SERVER: string
      SMTP_PORT: string
      SMTP_USER: string
      SMTP_KEY: string
    }
  }
  interface RequestExtended extends Request {
    user: {
      id: string
      name: string
      email: string
      role: string
    }
    query: {
      limit: string
      page: string
      q: string
      id: string
      secret: string
      type: string
      option: string
    }
  }
}
