import express from 'express'
import { createSlots, getAllSlots } from '../controllers/SoltsController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/getAll').get(getAllSlots)
router.route('/addSlot').post(createSlots)

export default router