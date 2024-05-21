import ICart from './cartInterface'
import IProduct from './productInterface'

//Interface for cart product, so we are importing IProduct
interface ICartProduct {
  id: number
  product: IProduct
  quantity: number
}

export default ICartProduct
