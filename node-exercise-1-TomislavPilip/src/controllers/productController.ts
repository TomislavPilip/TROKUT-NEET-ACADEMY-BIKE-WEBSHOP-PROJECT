import { Request, Response } from 'express'
import ProductService from '../services/productService'
import IProduct from '../models/interfaces/productInterface'
import Product from '../entities/Product'
import ProductImages from '../entities/ProductImages'
import productService from '../services/productService'
import ProductCategory from '../entities/ProductCategory'

const getAllProducts = async (req: Request, res: Response) => {
  res.send(await ProductService.getAllProducts())
}

const getProductById = async (req: Request, res: Response) => {
  res.send(
    await ProductService.getProductById(Number.parseInt(req.params.id, 10)),
  )
}

const updateProductById = async (req: Request, res: Response) => {
  const productId = Number.parseInt(req.params.id, 10)
  const existingProduct = req.body as Product
  res.send(await productService.updateProduct(productId, existingProduct))
}

const deleteProductbyId = async (req: Request, res: Response) => {
  res.send(
    await ProductService.deleteProductbyId(Number.parseInt(req.params.id, 10)),
  )
}

const getProductsByCategoryId = async (req: Request, res: Response) => {
  const categoryId = Number.parseInt(req.params.id, 10)
  res.send(await ProductService.getProductsByCategoryId(categoryId))
}

//////////This is for making new product
const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body as Product
  res.send(await ProductService.addNewProduct(newProduct))
}

const getProductImages = async (req: Request, res: Response) => {
  const productId = Number.parseInt(req.params.id, 10)
  res.send(await productService.getProductImages(productId))
}

const addProductImages = async (req: Request, res: Response) => {
  const productId = Number.parseInt(req.params.id, 10)
  const newImages = req.body as ProductImages[]
  res.send(
    await ProductService.addNewImagesToExistingProduct(productId, newImages),
  )
}

const updateImages = async (req: Request, res: Response) => {
  const images = req.body as ProductImages[]
  res.send(await productService.updateExistingPicturesInExistingProduct(images))
}
const deleteImage = async (req: Request, res: Response) => {
  const imageId = Number.parseInt(req.params.id, 10)
  res.send(await productService.deleteImageByImageId(imageId))
}

const searchProductByName = async (req: Request, res: Response) => {
  const { productTitle } = req.body
  res.send(await productService.searchProductByName(productTitle))
}

const getProductsByBrand = async (req: Request, res: Response) => {
  const brand = req.params.brand
  res.send(await productService.getProductsByBrand(brand))
}
export {
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
}
