import { Request, Response } from 'express'
import ProductCategoryService from '../services/productCategoryService'
import ProductCategory from '../entities/ProductCategory'

/////Category logic
const getAllProductCategories = async (req: Request, res: Response) => {
  res.send(await ProductCategoryService.getAllProductCategories())
}

const getProductCategoryByCategoryId = async (req: Request, res: Response) => {
  res.send(
    await ProductCategoryService.getProductCategoryByCategoryId(
      Number.parseInt(req.params.id, 10),
    ),
  )
}

const createProductCategory = async (req: Request, res: Response) => {
  const newProductCategory = req.body as ProductCategory
  res.send(
    await ProductCategoryService.createProductCategory(newProductCategory),
  )
}

const deleteProductCategorybyCategoryId = async (
  req: Request,
  res: Response,
) => {
  res.send(
    await ProductCategoryService.deleteProductCategorybyCategoryId(
      Number.parseInt(req.params.id, 10),
    ),
  )
}
const updateCategoryById = async (req: Request, res: Response) => {
  const productCategoryId = Number.parseInt(req.params.id, 10)
  const existingProductCategory = req.body as ProductCategory
  res.send(
    await ProductCategoryService.updateProductCategory(
      productCategoryId,
      existingProductCategory,
    ),
  )
}

export {
  getAllProductCategories,
  getProductCategoryByCategoryId,
  createProductCategory,
  deleteProductCategorybyCategoryId,
  updateCategoryById,
}
