import express from 'express'
import { getAllSlotsOfChef } from '../controllers/BookingController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/getAll').get(getAllSlotsOfChef)

export default router