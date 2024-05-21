import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Product from './Product'

@Index('ProductCategory_pkey', ['productCategoryId'], { unique: true })
@Entity('ProductCategory', { schema: 'public' })
export default class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'product_category_id' })
  productCategoryId: number

  @Column('character varying', {
    name: 'category_name',
    nullable: true,
    length: 256,
  })
  categoryName!: string | null

  @Column('bytea', { name: 'category_image', nullable: true })
  categoryImage!: Buffer | null

  @OneToMany(() => Product, (product) => product.productCategory_2)
  products!: Product[]

  updateExistingCategory(updatedData: ProductCategory) {
    this.categoryName = updatedData.categoryName
    this.categoryImage = updatedData.categoryImage
  }
}
