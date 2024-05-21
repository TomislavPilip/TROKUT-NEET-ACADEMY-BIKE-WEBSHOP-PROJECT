import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Bill from './Bill'
import Users from './Users'
import ProductCustomer from './ProductCustomer'

@Index('Cart_pkey', ['cartId'], { unique: true })
@Entity('Cart', { schema: 'public' })
export default class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'cart_id' })
  cartId!: number

  @Column('bigint', { name: 'product_id', nullable: true })
  productId!: number | null

  @Column('boolean', {
    name: 'isProcessed',
    nullable: true,
    default: () => 'false',
  })
  isProcessed!: boolean | null

  @Column('character varying', { name: 'status', nullable: true, length: 255 })
  status!: string | null

  @Column('numeric', { name: 'total', nullable: true, precision: 10, scale: 2 })
  total!: number | null

  @ManyToOne(() => Bill, (bill) => bill.carts)
  @JoinColumn([{ name: 'bill_id', referencedColumnName: 'billId' }])
  bill!: Bill

  @ManyToOne(() => Users, (users) => users.carts)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user!: Users

  @OneToMany(() => ProductCustomer, (productCustomer) => productCustomer.cart)
  productCustomers!: ProductCustomer[]

  public getProducts() {
    return this.productCustomers.map((prodCust) => {
      const product = prodCust.product
      product.updateQuantityandPrice(prodCust.quantity, prodCust.price)
      return product
    })
  }

  public async UpdateTotal(): Promise<void> {
    this.total = 0
    this.productCustomers.forEach((prodCust) => {
      if (this.total !== null) this.total += prodCust.price * prodCust.quantity
      else this.total = prodCust.price * prodCust.quantity
    })
    this.save()
  }
}
