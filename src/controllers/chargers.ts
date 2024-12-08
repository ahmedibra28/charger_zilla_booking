import { Request, Response } from 'express'
import { prisma } from '../helpers/prisma.db'
import { sendResponse } from '../helpers/sendResponse'

export const getChargers = async (req: Request, res: Response) => {
  try {
    const cursor = Number(req.query.cursor)
    const pageSize = Number(req.query.pageSize) || 25

    if (pageSize > 100)
      return sendResponse(res, 400, 'error', {
        message: 'Page size cannot exceed 100',
      })

    const chargers = await prisma.charging_stations.findMany({
      take: pageSize + 1, // Take one extra item to check if there's a next page
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: 'asc', // Ensure consistent ordering
      },
    })

    const hasNextPage = chargers.length > pageSize
    const nextCursor = hasNextPage ? chargers[pageSize - 1].id : null
    const items = hasNextPage ? chargers.slice(0, -1) : chargers

    return sendResponse(res, 200, 'success', {
      items,
      pageInfo: {
        hasNextPage,
        nextCursor,
        count: items.length,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
