import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Product from './Product'

@Index('Product Images_pkey', ['productImagesId'], { unique: true })
@Entity('ProductImages', { schema: 'public' })
export default class ProductImages extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'product_images_id' })
  productImagesId!: number

  @Column('character varying', {
    name: 'images_link',
    nullable: true,
    length: 1024,
  })
  imagesLink!: string | null

  @Column('character varying', {
    name: 'image_description',
    nullable: true,
    length: 512,
  })
  imageDescription!: string | null

  @Column('boolean', { name: 'is_thumbnail', nullable: true })
  isThumbnail!: boolean | null

  @ManyToOne(() => Product, (product) => product.productImages)
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'productId' }])
  product!: Product
}
