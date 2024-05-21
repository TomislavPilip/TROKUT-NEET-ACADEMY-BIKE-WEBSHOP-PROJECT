import fs from 'fs'
import { parse } from 'csv'
import path from 'path'
import Product from '../entities/Product'
import ProductCategory from '../entities/ProductCategory'
import FileImportTracker from '../entities/FileImportTracker'

export default class ProductImporter {
  static async loadAllProducts(): Promise<void> {
    if (!process.env.IMPORTS_FOLDER_PATH) {
      console.log('import folder not a path')
      return
    }
    const allFilePathsInDirectory = (
      await fs.promises.readdir(process.env.IMPORTS_FOLDER_PATH, {
        withFileTypes: true,
      })
    )
      .filter((file) => file.isFile() && file.name.split('.').pop() === 'csv')
      .map((file) => file.name)
    try {
      for await (const fileName of allFilePathsInDirectory) {
        const alreadyImported = await FileImportTracker.exists({
          where: {
            name: fileName,
          },
        })

        if (alreadyImported) continue

        const parser = await fs
          .createReadStream(
            path.join(process.env.IMPORTS_FOLDER_PATH, fileName),
            'utf8',
          )
          .pipe(
            parse({
              // CSV options if any
              delimiter: ',',
            }),
          )
        for await (const record of parser) {
          const product =
            await ProductImporter.ConvertCSVRecordToProductEntity(record)
          await product.save()
        }
        const importTracker = new FileImportTracker()
        importTracker.name = fileName
        await importTracker.save()
        console.log(`Imported file: ${fileName}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  private static async ConvertCSVRecordToProductEntity(
    record: string[],
  ): Promise<Product> {
    const product = new Product()
    product.productTitle = record[0]
    product.productBrand = record[1]
    product.productDescription = record[2]
    product.productPrice = Number.parseFloat(record[3])
    product.productQuantity = Number.parseInt(record[4], 10)
    product.productRating = Number.parseInt(record[5])
    product.productCategory = record[6]
    product.productDiscount = Number.parseInt(record[7])
    const categoryId = Number.parseInt(record[8])
    product.productCategory_2 = await ProductCategory.findOne({
      where: {
        productCategoryId: categoryId,
      },
    })
    if (!product.productCategory_2) {
      throw new Error(`Product category with ID ${categoryId} not found`)
    }
    return product
  }
}
