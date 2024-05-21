import Product from '../entities/Product'
import ICartProduct from './interfaces/cartProductInterface'
import IProduct from './interfaces/productInterface'

class CartProduct extends Product {
  id: number
  product: IProduct
  quantity: number
}

export default CartProduct
