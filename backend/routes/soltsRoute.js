import express from 'express'
import { createSlots, deleteSlot, getAllSlots, getSlot, updateSlot } from '../controllers/SoltsController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/getAll').get(getAllSlots)
router.route('/addSlot').post(createSlots)
router.route('/getSlot').get(getSlot)
router.route('/updateSlot').put(updateSlot)
router.route('/deleteSlot/:id').delete(deleteSlot)

export default router