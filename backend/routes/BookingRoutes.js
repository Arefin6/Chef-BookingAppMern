import express from 'express'
import { getAllSlotsOfChef, updateBooking } from '../controllers/BookingController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/getAll').get(getAllSlotsOfChef)
router.route('/update/booking/:id').put(updateBooking)

export default router