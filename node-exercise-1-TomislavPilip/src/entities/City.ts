import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Address from './Address'

@Index('City_pkey', ['cityId'], { unique: true })
@Entity('City', { schema: 'public' })
export default class City extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'city_id' })
  cityId!: number

  @Column('character varying', {
    name: 'zip_code',
    nullable: true,
    length: 128,
  })
  zipCode!: string | null

  @Column('character varying', { name: 'Country', nullable: true, length: 255 })
  country!: string | null

  @Column('character varying', { name: 'city', nullable: true, length: 255 })
  city!: string | null

  @OneToMany(() => Address, (address) => address.city)
  addresses!: Address[]
}
