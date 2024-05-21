import express, { Request, Response } from 'express'
import ProductService from '../services/productService'
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductbyId,
  addProductImages,
  updateProductById,
  getProductImages,
  updateImages,
  deleteImage,
  getProductsByCategoryId,
  searchProductByName,
  getProductsByBrand,
} from '../controllers/productController'

const router = express.Router()

/////Routes dealing with products
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.get('/categories/:id', getProductsByCategoryId)
router.get('/brand/:brand', getProductsByBrand)
router.put('/:id', updateProductById)
router.post('/', createProduct)
router.post('/search-product', searchProductByName)
router.delete('/:id', deleteProductbyId)

/////Routes dealing with product images
router.get('/:id/images', getProductImages)
router.post('/:id/images', addProductImages)
router.put('/:id/images/:id', updateImages)
router.delete('/:id/images/:id', deleteImage)

export default router
