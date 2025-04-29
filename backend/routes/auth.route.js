import express from 'express'
import {adminDetail, login, logout, signup, verifyEmail} from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/authentication.js'

const router = express.Router()

router.post('/api/signup', signup)
router.post('/api/login', login)
router.post('/api/logout', logout)

router.get('/api/verify-email/:token', verifyEmail)
router.get('/api/admin-detail', verifyToken, adminDetail);



export default router