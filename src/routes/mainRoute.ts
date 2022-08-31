import express from 'express'
import { battle } from '../controllers/mainController'
const router = express.Router()

router.post('/battle',battle)
router.get('/ranking')


export default router;