import express from 'express'
import {
  getCart,
  addProductToCart,
  getCartById,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
} from '../controllers/cartController'

import { authenticateToken } from '../middlewares/authHandler'

const router = express.Router()

//get cart from user
router.get('/', getCart)
router.get('/:id', getCartById)

router.patch('/:cartId/products/:productId', updateProductQuantity)
//add products to cart by id
router.post('/:cartId/products/:productId/add', addProductToCart)

router.delete('/:cartId/products/:productId', removeProductFromCart)
router.delete('/:cartId/products', clearCart)

export default router
