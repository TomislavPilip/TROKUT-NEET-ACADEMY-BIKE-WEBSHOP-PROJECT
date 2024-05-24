// src/index.js

import express, { Express } from 'express'
import 'reflect-metadata'
import dataSource from './app-data-source'
import homeRoutes from './routes/homeRoutes'
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import userRoutes from './routes/userRoutes'
import productCategoryRoutes from './routes/productCategoryRoutes'
import authRoutes from './routes/authRoutes'
import errorHandler from './middlewares/errorHandler'
import ProductImporter from './config/productImporter'
const cors = require('cors')

dataSource
  .initialize()
  .then(async () => {
    console.log('Data Source has been initialized!')
    await ProductImporter.loadAllProducts()
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(errorHandler)
// Use the CORS middleware

//app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)
app.use('/categories', productCategoryRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
