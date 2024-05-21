import { Request, Response } from 'express'
import Users from '../entities/Users'
import userService from '../services/userService'

const getAllUsers = async (req: Request, res: Response) => {
  res.send(await userService.getAllUsers())
}

const getUserByUserId = async (req: Request, res: Response) => {
  res.send(await userService.getUserById(Number.parseInt(req.params.id, 10)))
}
const createUser = async (req: Request, res: Response) => {
  const newUser = req.body as Users
  res.send(await userService.createUser(newUser))
}

const deleteUserById = async (req: Request, res: Response) => {
  res.send(await userService.deleteUserById(Number.parseInt(req.params.id, 10)))
}

const updateUserHandler = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10)
  const updatedUserData = req.body as Users
  try {
    const updatedUser = await userService.updateUser(userId, updatedUserData)
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  createUser,
  getAllUsers,
  getUserByUserId,
  deleteUserById,
  updateUserHandler,
}
