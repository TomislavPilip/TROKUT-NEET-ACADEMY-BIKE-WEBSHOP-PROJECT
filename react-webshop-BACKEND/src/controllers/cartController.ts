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

const getCartById = async (req: AuthenticatedRequest, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    res.send(await cartService.getCartById(Number.parseInt(req.params.id, 10)))
  } catch (error) {
    console.error('Error fetching cart by ID:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const addProductToCart = async (req: AuthenticatedRequest, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const cartProductAddRequest = req.body as CartProductAddRequest
    const cartId = Number(parseInt(req.params.cartId, 10))
    const productId = Number(parseInt(req.params.productId, 10))
    res.send(
      await cartService.addProductById(
        cartId,
        productId,
        cartProductAddRequest,
      ),
    )
  } catch (error) {
    console.error('Error adding product to cart:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const updateProductQuantity = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
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

const removeProductFromCart = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  const cartId = Number(parseInt(req.params.cartId, 10))
  const productId = Number(parseInt(req.params.productId, 10))

  res.send(await cartService.removeProductFromCart(cartId, productId))
}

const clearCart = async (req: AuthenticatedRequest, res: Response) => {
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
