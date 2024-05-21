import { Repository, getRepository } from 'typeorm'
import Users from '../entities/Users'
import HttpError from '../utils/HttpError'

class UserService {
  async getAllUsers(): Promise<Users[]> {
    const users = await Users.find()
    return users
  }
  async createUser(user: Users): Promise<Users> {
    const newUser = await Users.create(user).save()
    return newUser
  }
  async getUserById(userId: number): Promise<Users> {
    const foundUser = await Users.findOne({
      relations: {
        address: true,
      },
      where: {
        userId: userId,
      },
    })
    if (!foundUser) throw new HttpError(404, `User with id ${userId} not found`)
    return foundUser
  }

  async deleteUserById(userId: number): Promise<Users> {
    const deletedUser = await Users.findOne({
      where: {
        userId: userId,
      },
    })
    if (!deletedUser) {
      throw new HttpError(404, `User with id ${userId} not found`)
    } else {
      await Users.remove(deletedUser)
      return deletedUser
    }
  }

  async updateUser(userId: number, updatedUser: Users): Promise<Users> {
    const user = await this.getUserById(userId)
    user.userEmail = updatedUser.userEmail
    user.userName = updatedUser.userName
    user.userPhone = updatedUser.userPhone
    user.userPassword = updatedUser.userPassword
    user.userRole = updatedUser.userRole
    user.userIsActive = updatedUser.userIsActive
    user.address = updatedUser.address
    return user.save()
  }
}

export default new UserService()
