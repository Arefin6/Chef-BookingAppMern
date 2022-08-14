import express from 'express'
import { authUser, getChefProfile, registerChef, updateChefProfile, verifyToken } from '../controllers/chefController.js'
import protect from '../middleware/authMidddleware.js'

const router = express.Router()

router.route('/register').post(registerChef)
router.route('/signIn').post(authUser)
router.route('/profile').get(protect, getChefProfile).put(protect,updateChefProfile)
router.route('/:id/verify/:token/').post(verifyToken)

export default router