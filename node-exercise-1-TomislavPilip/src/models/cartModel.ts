import ICart from './interfaces/cartInterface'
import ICartProduct from './interfaces/cartProductInterface'
import CartEntity from '../entities/Cart'

class Cart extends CartEntity {
  public get products() {
    return this.productCustomers.map((prodCust) => {
      const product = prodCust.product
      product.updateQuantityandPrice(prodCust.quantity, prodCust.price)
      return product
    })
  }
}

export default Cart
