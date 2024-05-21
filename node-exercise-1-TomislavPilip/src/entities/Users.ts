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
import Cart from './Cart'
import ProductCustomer from './ProductCustomer'
import Address from './Address'

@Index('Users_pkey', ['userId'], { unique: true })
@Entity('Users', { schema: 'public' })
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  userId!: number

  @Column('character varying', {
    name: 'user_email',
    nullable: true,
    length: 255,
  })
  userEmail!: string | null

  @Column('character varying', { name: 'user_name', length: 255 })
  userName!: string

  @Column('character varying', { name: 'user_phone', nullable: true })
  userPhone!: string | null

  @Column('text', { name: 'user_password' })
  userPassword!: string

  @Column('timestamp with time zone', {
    name: 'user_createdAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  userCreatedAt!: Date | null

  @Column('boolean', { name: 'user_isActive', nullable: true })
  userIsActive!: boolean | null

  @Column('character varying', {
    name: 'user_role',
    nullable: true,
    length: 255,
  })
  userRole!: string | null

  @OneToMany(() => Cart, (cart) => cart.user)
  carts!: Cart[]

  @OneToMany(() => ProductCustomer, (productCustomer) => productCustomer.user)
  productCustomers!: ProductCustomer[]

  @ManyToOne(() => Address, (address) => address.users)
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'addressId' }])
  address!: Address

  updateExistingUser(updatedUser: Users) {
    this.userEmail = updatedUser.userEmail
    this.userName = updatedUser.userName
    this.userPhone = updatedUser.userPhone
    this.userPassword = updatedUser.userPassword
    this.userRole = updatedUser.userRole
    this.userIsActive = updatedUser.userIsActive
    this.address = updatedUser.address
  }
}
