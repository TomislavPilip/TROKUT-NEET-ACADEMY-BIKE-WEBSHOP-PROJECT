import ICart from '../models/interfaces/cartInterface'
import Cart from '../entities/Cart'
import HttpError from '../utils/HttpError'
import productService from './productService'
import userService from './userService'
import CartProduct from '../models/cartProductModel'
import CartProductAddRequest from '../models/request/cartProductAddRequest'
import ProductCustomer from '../entities/ProductCustomer'
import Product from '../entities/Product'
import Users from '../entities/Users'
import Bill from '../entities/Bill'

//The whole business logic for cart is here
class CartService {
  async getCart(user: Users): Promise<Cart> {
    let userCart = await Cart.findOne({
      relations: ['user', 'productCustomers', 'productCustomers.product'],

      where: {
        user: user,
        isProcessed: false,
      },
    })
    if (!userCart) {
      userCart = new Cart()
      userCart.user = user
      userCart = await userCart.save()
    }
    return userCart
  }

  async getCartById(cartId: number): Promise<Cart> {
    const foundCart = await Cart.findOne({
      relations: [
        'user',
        'productCustomers',
        'productCustomers.product',
        'productCustomers.product.productImages',
      ],

      where: {
        cartId: cartId,
      },
    })

    if (!foundCart) throw new HttpError(404, `Cart with id ${cartId} not found`)
    return foundCart
  }

  //adding product in basket with the product id,
  async addProductById(
    cartId: number,
    productId: number,
    cartProductAddRequest: CartProductAddRequest,
  ): Promise<Cart> {
    //with this we get the cart with certain Id
    let cart = await this.getCartById(cartId)
    const product = await productService.getProductById(productId)

    this.checkIsQuantityValid(product, cartProductAddRequest.quantity)

    //we are checking if there is product in the cart
    const existingProductInCart = cart.productCustomers.find(
      (prodCust) => Number(prodCust.product.productId) === productId,
    )

    //if there is product in the cart we add quantity
    if (existingProductInCart) {
      existingProductInCart.quantity += cartProductAddRequest.quantity
      await existingProductInCart.save()
    } else {
      const cartProduct = ProductCustomer.CreateCartProduct(
        cart,
        product,
        cartProductAddRequest.quantity,
      )
      await cartProduct.save()
    }
    cart = await this.getCartById(cartId)
    await cart.UpdateTotal()
    return cart
  }

  ///Update PRODUCT QUANTITY
  async updateProductQuantity(
    cartId: number,
    productId: number,
    cartProductAddRequest: CartProductAddRequest,
  ): Promise<Cart> {
    const cart = await this.getCartById(cartId)
    console.log(cart)
    const product = await productService.getProductById(productId)

    this.checkIsQuantityValid(product, cartProductAddRequest.quantity)

    const existingProductInCart = cart.productCustomers.find(
      (pc) => Number(pc.product.productId) === productId,
    )
    if (existingProductInCart) {
      existingProductInCart.quantity += cartProductAddRequest.quantity
      await existingProductInCart.save()
      console.log(existingProductInCart)
    }
    await cart.UpdateTotal()
    return cart
  }
  //removing product from basket
  async removeProductFromCart(
    cartId: number,
    productId: number,
  ): Promise<Cart> {
    let cart = await this.getCartById(cartId)
    console.log('cart before removing product: ', cart)

    const existingProductInCart = cart.productCustomers.find(
      (prodCust) => Number(prodCust.product.productId) === productId,
    )
    console.log(ProductCustomer)
    console.log(existingProductInCart)

    if (existingProductInCart) {
      await existingProductInCart.remove()

      console.log(existingProductInCart)
    }

    cart = await this.getCartById(cartId)
    await cart.UpdateTotal()
    return cart
  }

  async clearCart(cartId: number): Promise<Cart> {
    let cart = await this.getCartById(cartId)
    await ProductCustomer.remove(cart.productCustomers)
    cart = await this.getCartById(cartId)
    await cart.UpdateTotal()
    return cart
  }

  checkIsQuantityValid(product: Product, quantity: number): void {
    if (!product.productQuantity || product.productQuantity < quantity)
      throw new HttpError(
        404,
        `request quantity ${quantity} is larger then available product quantity(${product.productQuantity})`,
      )
  }
}

export default new CartService()
