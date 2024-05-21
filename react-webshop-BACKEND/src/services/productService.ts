import IProduct from '../models/interfaces/productInterface'
import products from '../models/productModel'
import HttpError from '../utils/HttpError'
import Product from '../entities/Product'
import ProductImages from '../entities/ProductImages'
import { ILike, getRepository } from 'typeorm'
import ProductCategory from '../entities/ProductCategory'
import appDataSource from '../app-data-source'

class ProductService {
  private products: IProduct[] = products

  ////Function to get all the products
  async getAllProducts(): Promise<Product[]> {
    return Product.find({
      relations: ['productImages'],
    })
  }

  ////Function to get product by id, we are passing id as parameter
  ///This function is asynchronous so it will return a promise which is one <Product>
  ///We are storing method to find product by Id inside of variable "foundProduct"
  ///"WHERE" sets productId to be equal to the one passed through parameter => so that product will be RETURNED
  ///"RELATIONS" means that productImages should be loaded also as sort of dependency by the foreign key
  async getProductById(productId: number): Promise<Product> {
    const foundProduct = await Product.findOne({
      relations: {
        productImages: true,
      },
      where: {
        productId: productId,
      },
    })
    if (!foundProduct) {
      throw new HttpError(404, `Product with ${productId} not found`)
    }
    return foundProduct
  }
  async getProductsByCategoryId(categoryId: number): Promise<Product[]> {
    const productByCategory = await Product.find({
      where: {
        productCategory_2: { productCategoryId: categoryId },
      },
    })
    if (!productByCategory || productByCategory.length === 0) {
      throw new HttpError(
        404,
        `Products with categoryId ${categoryId} not found`,
      )
    }
    return productByCategory
  }

  ///UPDATE PRODUCT
  async updateProduct(
    productId: number,
    existingProduct: Product,
  ): Promise<Product> {
    const product = await this.getProductById(productId)
    product.updateExistingProduct(existingProduct)
    return product.save()
  }

  ////Function to delete product by id

  async deleteProductbyId(id: number): Promise<Product> {
    const productToDelete = await Product.findOne({
      relations: {
        productImages: true,
      },
      where: {
        productId: id,
      },
    })

    if (!productToDelete) {
      throw new HttpError(404, `Product with ${id} not found`)
    } else {
      await Product.remove(productToDelete)
      return productToDelete
    }
  }

  addNewProduct(product: Product): Promise<Product> {
    const productAdded = Product.create(product)

    return productAdded.save()
  }

  async getProductImages(productId: number): Promise<ProductImages[]> {
    const product = await this.getProductById(productId)
    return product.productImages
  }

  async addNewImagesToExistingProduct(
    productId: number,
    newImages: ProductImages[],
  ): Promise<Product> {
    const product = await this.getProductById(productId)
    for (const image of newImages) {
      const newImageEntity = ProductImages.create(image)
      newImageEntity.product = product
      await newImageEntity.save()
    }
    return this.getProductById(productId)
  }

  async updateExistingPicturesInExistingProduct(
    updateImages: ProductImages[],
  ): Promise<ProductImages[]> {
    const updatedImages = new Array<ProductImages>()
    for await (const image of updateImages) {
      const existingImage = await ProductImages.findOne({
        where: {
          productImagesId: image.productImagesId,
        },
      })
      if (existingImage) {
        existingImage.isThumbnail = image.isThumbnail
        existingImage.imagesLink = image.imagesLink
        existingImage.imageDescription = image.imageDescription
        updatedImages.push(await existingImage.save())
      }
    }
    return updatedImages
  }

  async deleteImageByImageId(productImagesId: number): Promise<ProductImages> {
    const imageToDelete = await ProductImages.findOne({
      where: {
        productImagesId: productImagesId,
      },
    })
    if (!imageToDelete) {
      throw new HttpError(404, `Image with id ${productImagesId} not found`)
    }
    await imageToDelete.remove()
    return imageToDelete
  }

  async searchProductByName(productTitle: string): Promise<Product[]> {
    const searchResults = await Product.find({
      where: {
        productTitle: ILike(`%${productTitle}%`),
      },
    })
    return searchResults
  }

  async getProductsByBrand(productBrand: string): Promise<Product[]> {
    const productRepository = appDataSource.getRepository(Product)
    const productsByBrand = await productRepository
      .createQueryBuilder('product')
      .where('LOWER(product.productBrand) = LOWER(:brand)', {
        brand: productBrand,
      })
      .getMany()
    return productsByBrand
  }
}

export default new ProductService()
