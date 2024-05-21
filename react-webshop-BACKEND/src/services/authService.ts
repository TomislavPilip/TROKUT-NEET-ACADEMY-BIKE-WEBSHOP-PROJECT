import Users from '../entities/Users'
import HttpError from '../utils/HttpError'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService {
  //Here we define the methods that will be used by the controller
  //First we define the register method in which we pass the parameters for the new user
  async registerUser(
    userEmail: string,
    userName: string,
    userPassword: string,
    userPhone: string,
  ): Promise<void> {
    // Check if user with the provided email already exists
    const existingUserByEmail = await Users.findOne({
      where: { userEmail: userEmail },
    })
    if (existingUserByEmail) {
      throw new HttpError(409, `User with email ${userEmail} already exists`)
    }

    //Check if user with the provided username already exists
    const existingUserByUsername = await Users.findOne({
      where: { userName: userName },
    })
    if (existingUserByUsername) {
      throw new HttpError(409, `User with username ${userName} already exists`)
    }

    //Hash of the password logic
    //10 represents number of "salt" rounds, bigger number more complex hash algorithm is
    const hashedPassword = await bcrypt.hash(userPassword, 10)

    //Create a new user object
    //createdAt is NULL, have to check why
    const newUser = Users.create({
      userEmail,
      userName,
      userPassword: hashedPassword,
      userPhone,
      userRole: 'user',

      // Set other user properties here if needed
    })

    // Save the new user to the database
    await newUser.save()
  }

  async loginUser(
    userEmail: string,
    userPassword: string,
  ): Promise<{ accessToken: string; userName: string }> {
    // Check if user with the provided email already exists

    const findUser = await Users.findOne({
      where: { userEmail: userEmail },
    })

    if (!findUser) {
      throw new HttpError(401, `Wrong email or password`)
    }

    console.log('userPassword:', userPassword)
    console.log('findUser.userPassword:', findUser.userPassword)

    const isPasswordValid = await bcrypt.compare(
      userPassword,
      findUser.userPassword,
    )
    if (!isPasswordValid) {
      throw new HttpError(401, 'Wrong email or password')
    }

    const accessToken = jwt.sign(
      {
        userEmail: userEmail,
        userId: findUser.userId,
      },
      'TomislavPilip',
      { expiresIn: '24h' },
    )

    return { accessToken, userName: findUser.userName }
  }
}

export default new AuthService()
