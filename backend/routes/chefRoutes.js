import express from 'express'
import { authUser, registerChef } from '../controllers/chefController.js'
// import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/register').post(registerChef)
router.route('/signIn').post(authUser)

export default router