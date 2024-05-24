import express, { Request, Response } from 'express'
import userService from '../services/userService'
import { authenticateToken } from '../middlewares/authHandler'
import {
  createUser,
  getAllUsers,
  getUserByUserId,
  deleteUserById,
  updateUserHandler,
} from '../controllers/userController'

const router = express.Router()

router.post('/user', createUser)
router.get('/user', getAllUsers)
router.delete('/user/:id', deleteUserById)
//router.use(authenticateToken)

router.get('/user/:id', getUserByUserId)

router.put('/user/:id', updateUserHandler)

export default router
