import { Request, Response } from 'express'
import cartService from '../services/cartService'
import CartProductAddRequest from '../models/request/cartProductAddRequest'
import AuthenticatedRequest from '../middlewares/authHandler'

const getCart = async (req: AuthenticatedRequest, res: Response) => {
  const user = req.user
  // Check if user is authenticated
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    // Call the getCart method with the user object
    const userCart = await cartService.getCart(user)
    res.json(userCart) // Send the cart as JSON response
  } catch (error) {
    console.error('Error fetching user cart:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getCartById = async (req: Request, res: Response) => {
  res.send(await cartService.getCartById(Number.parseInt(req.params.id, 10)))
}

const addProductToCart = async (req: Request, res: Response) => {
  const cartProductAddRequest = req.body as CartProductAddRequest
  const cartId = Number(parseInt(req.params.cartId, 10))
  const productId = Number(parseInt(req.params.productId, 10))
  res.send(
    await cartService.addProductById(cartId, productId, cartProductAddRequest),
  )
}

const updateProductQuantity = async (req: Request, res: Response) => {
  const cartProductAddRequest = req.body as CartProductAddRequest
  const cartId = Number(parseInt(req.params.cartId, 10))
  const productId = Number(parseInt(req.params.productId, 10))
  res.send(
    await cartService.updateProductQuantity(
      cartId,
      productId,
      cartProductAddRequest,
    ),
  )
}

const removeProductFromCart = async (req: Request, res: Response) => {
  const cartId = Number(parseInt(req.params.cartId, 10))
  const productId = Number(parseInt(req.params.productId, 10))

  res.send(await cartService.removeProductFromCart(cartId, productId))
}

const clearCart = async (req: Request, res: Response) => {
  const cartId = Number.parseInt(req.params.cartId, 10)
  res.send(await cartService.clearCart(cartId))
}

export {
  getCart,
  addProductToCart,
  getCartById,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
}
