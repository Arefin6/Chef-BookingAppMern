import express from 'express'
import { sendPasswordLink } from '../controllers/passwordResetController.js';
const router = express.Router()

router.route('/').post(sendPasswordLink)

export default router;