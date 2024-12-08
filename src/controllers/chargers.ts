import { Request, Response } from 'express'
import { prisma } from '../helpers/prisma.db'
import { sendResponse } from '../helpers/sendResponse'

export const getChargers = async (req: Request, res: Response) => {
  try {
    const chargers = await prisma.charging_stations.findMany({ take: 5 })

    return sendResponse(res, 200, 'success', chargers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
