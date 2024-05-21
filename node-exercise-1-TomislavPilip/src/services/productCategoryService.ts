import HttpError from '../utils/HttpError'
import Product from '../entities/Product'
import ProductCategory from '../entities/ProductCategory'

class ProductCategoryService {
  //////Logic for categories
  async getAllProductCategories(): Promise<ProductCategory[]> {
    return ProductCategory.find()
  }

  async getProductCategoryByCategoryId(
    categoryId: number,
  ): Promise<ProductCategory> {
    const foundCategory = await ProductCategory.findOne({
      where: {
        productCategoryId: categoryId,
      },
    })

    if (!foundCategory) {
      throw new HttpError(404, `Category with ${categoryId} not found`)
    }
    return foundCategory
  }

  async createProductCategory(
    productCategory: ProductCategory,
  ): Promise<ProductCategory> {
    const newCategory = ProductCategory.create(productCategory)
    return newCategory.save()
  }

  async deleteProductCategorybyCategoryId(
    id: number,
  ): Promise<ProductCategory> {
    const productCategoryToDelete = await ProductCategory.findOne({
      where: {
        productCategoryId: id,
      },
    })

    if (!productCategoryToDelete) {
      throw new HttpError(404, `Product category with ${id} not found`)
    } else {
      await productCategoryToDelete.remove()
      return productCategoryToDelete
    }
  }

  async updateProductCategory(
    productCategoryId: number,
    existingProductCategory: ProductCategory,
  ): Promise<ProductCategory> {
    const productCategory =
      await this.getProductCategoryByCategoryId(productCategoryId)
    productCategory.updateExistingCategory(existingProductCategory)
    return productCategory.save()
  }
}

export default new ProductCategoryService()
