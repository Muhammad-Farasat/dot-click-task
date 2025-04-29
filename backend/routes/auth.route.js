import express from 'express'
import {adminDetail, login, logout, signup, verifyEmail} from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/authentication.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.get('/verify-email/:token', verifyEmail)
router.get('/admin-detail', verifyToken, adminDetail);



export default router