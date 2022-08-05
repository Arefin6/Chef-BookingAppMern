import express from 'express'
import { sendPasswordLink, setNewPassword, verifyPasswordResetLink } from '../controllers/passwordResetController.js';
const router = express.Router()

router.route('/').post(sendPasswordLink)
router.route('/:id/:token').get(verifyPasswordResetLink).post(setNewPassword)

export default router;