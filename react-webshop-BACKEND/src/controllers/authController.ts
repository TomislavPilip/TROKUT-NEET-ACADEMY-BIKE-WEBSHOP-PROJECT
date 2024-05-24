import { Request, Response, NextFunction } from 'express'
import AuthService from '../services/authService'

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //Ovo je request koji korisnik salje u body
    const { userEmail, userName, userPassword, userPhone } = req.body
    await AuthService.registerUser(userEmail, userName, userPassword, userPhone)
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    next(error) // Pass error to the error handling middleware
  }
}

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userEmail, userPassword } = req.body
    const { accessToken, userName } = await AuthService.loginUser(
      userEmail,
      userPassword,
    )
    res
      .status(200)
      .json({ message: 'User logged in successfully', accessToken, userName })
  } catch (error) {
    next(error) // Pass error to the error handling middleware
  }
}

export { registerUser, loginUser }
