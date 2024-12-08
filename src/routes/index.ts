import { Router } from 'express'
import { getChargers } from '../controllers/chargers'

const router = Router()

router.get('/chargers', getChargers)

export default router
