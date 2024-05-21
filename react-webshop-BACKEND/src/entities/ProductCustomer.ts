import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Cart from './Cart'
import Product from './Product'
import Users from './Users'

@Index('ProductCustomer_pkey', ['productuserId'], { unique: true })
@Entity('ProductCustomer', { schema: 'public' })
export default class ProductCustomer extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'productuser_id' })
  productuserId!: number

  @Column('integer', { name: 'quantity' })
  quantity!: number

  @Column('numeric', { name: 'price', nullable: true, precision: 10, scale: 2 })
  price!: number | null

  @ManyToOne(() => Cart, (cart) => cart.productCustomers)
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'cartId' }])
  cart!: Cart

  @ManyToOne(() => Product, (product) => product.productCustomers)
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'productId' }])
  product!: Product

  @ManyToOne(() => Users, (users) => users.productCustomers)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user!: Users

  public static CreateCartProduct(
    cart: Cart,
    product: Product,
    quantity: number,
  ) {
    if (quantity <= 0) {
      throw new Error('Quantity must be a positive integer')
    }
    const pc = new ProductCustomer()
    pc.price = product.productPrice
    pc.quantity = quantity
    pc.cart = cart
    pc.product = product
    if (cart.user) pc.user = cart.user
    return pc
  }
}
