import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Cart from './Cart'

@Index('Bill_pkey', ['billId'], { unique: true })
@Entity('Bill', { schema: 'public' })
export default class Bill extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'bill_id' })
  billId!: number

  @Column('numeric', {
    name: 'bill_total',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  billTotal!: string | null

  @Column('integer', { name: 'bill_tax', nullable: true })
  billTax: number | null

  @Column('character varying', {
    name: 'bill_paymentMethod',
    nullable: true,
    length: 255,
  })
  billPaymentMethod!: string | null

  @Column('character varying', { name: 'bill_uui', length: 1024 })
  billUui!: string

  @Column('character varying', {
    name: 'payment_id',
    nullable: true,
    length: 1024,
  })
  paymentId!: number | null

  @OneToMany(() => Cart, (cart) => cart.bill)
  carts!: Cart[]
}
