import ICartProduct from './cartProductInterface'

interface ICart {
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export default ICart
