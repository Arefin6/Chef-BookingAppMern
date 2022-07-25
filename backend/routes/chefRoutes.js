import express from 'express'
import { authUser, registerChef, verifyToken } from '../controllers/chefController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/register').post(registerChef)
router.route('/signIn').post(authUser)
router.route('/:id/verify/:token/').get(verifyToken)

export default router