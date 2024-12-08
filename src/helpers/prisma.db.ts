// @ts-ignore
import { PrismaClient, QueryMode } from '@prisma/client'

let prisma = new PrismaClient()

export { prisma, QueryMode }
