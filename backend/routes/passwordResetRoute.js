import express from 'express'
import { sendPasswordLink, verifyPasswordResetLink } from '../controllers/passwordResetController.js';
const router = express.Router()

router.route('/').post(sendPasswordLink)
router.route('/:id/:token').get(verifyPasswordResetLink)

export default router;