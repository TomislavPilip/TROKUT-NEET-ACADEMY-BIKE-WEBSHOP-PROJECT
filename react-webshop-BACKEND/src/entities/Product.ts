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
import ProductCategory from './ProductCategory'
import ProductCustomer from './ProductCustomer'
import ProductImages from './ProductImages'

@Index('Product_pkey', ['productId'], { unique: true })
@Entity('Product', { schema: 'public' })
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'product_id' })
  productId!: number

  @Column('character varying', {
    name: 'product_title',
    nullable: true,
    length: 255,
  })
  productTitle!: string | null

  @Column('character varying', {
    name: 'product_description',
    nullable: true,
    length: 2048,
  })
  productDescription!: string | null

  @Column('numeric', { name: 'product_price', precision: 10, scale: 2 })
  productPrice!: number

  @Column('character varying', {
    name: 'product_brand',
    nullable: true,
    length: 255,
  })
  productBrand!: string | null

  @Column('character varying', {
    name: 'product_category',
    nullable: true,
    length: 255,
  })
  productCategory!: string | null

  @Column('integer', { name: 'product_discount', nullable: true })
  productDiscount!: number | null

  @Column('integer', { name: 'product_rating', nullable: true })
  productRating!: number | null

  @Column('integer', { name: 'product_quantity', nullable: true })
  productQuantity!: number | null

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products,
  )
  @JoinColumn([
    { name: 'product_category_id', referencedColumnName: 'productCategoryId' },
  ])
  productCategory_2: ProductCategory

  @OneToMany(
    () => ProductCustomer,
    (productCustomer) => productCustomer.product,
  )
  productCustomers!: ProductCustomer[]

  @OneToMany(() => ProductImages, (productImages) => productImages.product)
  productImages!: ProductImages[]

  updateQuantityandPrice(quantity: number, price: number) {
    this.productPrice = price
    this.productQuantity = quantity
  }

  updateExistingProduct(updatedData: Product) {
    this.productPrice = updatedData.productPrice
    this.productQuantity = updatedData.productQuantity
    this.productTitle = updatedData.productTitle
    this.productDescription = updatedData.productDescription
    this.productBrand = updatedData.productBrand
    this.productCategory = updatedData.productCategory
    this.productDiscount = updatedData.productDiscount
    this.productRating = updatedData.productRating
  }
}
