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
import City from './City'
import Users from './Users'

@Index('Address_pkey', ['addressId'], { unique: true })
@Entity('Address', { schema: 'public' })
export default class Address extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'address_id' })
  addressId!: number

  @Column('character varying', {
    name: 'address_street',
    nullable: true,
    length: 255,
  })
  addressStreet!: string | null

  @Column('character varying', {
    name: 'street_number',
    nullable: true,
    length: 32,
  })
  streetNumber!: string | null

  @Column('integer', { name: 'zip_code', nullable: true })
  zipCode!: number | null

  @Column('character varying', { name: 'country', nullable: true, length: 255 })
  country!: string | null

  @ManyToOne(() => City, (city) => city.addresses)
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'cityId' }])
  city: City

  @OneToMany(() => Users, (users) => users.address)
  users: Users[]
}
