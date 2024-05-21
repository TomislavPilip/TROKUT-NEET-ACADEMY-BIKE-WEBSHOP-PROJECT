import express, { Request, Response } from 'express'
import ProductService from '../services/productService'
import {
  getAllProductCategories,
  getProductCategoryByCategoryId,
  createProductCategory,
  deleteProductCategorybyCategoryId,
  updateCategoryById,
} from '../controllers/productCategoryController'

const router = express.Router()

/////Routes dealing with product categories
router.get('/', getAllProductCategories)
router.get('/:id', getProductCategoryByCategoryId)
router.post('/', createProductCategory)
router.delete('/:id', deleteProductCategorybyCategoryId)
router.put('/:id', updateCategoryById)

export default router
