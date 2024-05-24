import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import HttpError from '../utils/HttpError'
import Users from '../entities/Users'

export default interface AuthenticatedRequest extends Request {
  user?: Users
}
export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  //Dohvacamo autorizaciju iz headera
  const authHeader = req.headers['authorization']
  //Dohvacamo token iz headera
  const token = authHeader && authHeader.split(' ')[1]

  //If token is doesnt exist we return an error
  if (!token) {
    return res.sendStatus(401).json({ message: 'Missing authentication token' })
  }
  jwt.verify(token, 'TomislavPilip', async (err: any, user: any) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid authentication token' })
    }

    const authenticatedUser = await Users.findOne({
      where: {
        userId: user.userId,
      },
    })
    if (!authenticatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    ;(req as any).user = authenticatedUser
    next() // Proceed to next middleware
  })
}
