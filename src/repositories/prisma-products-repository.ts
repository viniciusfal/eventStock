import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { IProductsRepository } from './Iproducts-repository'

export class PrismaProductRepository implements IProductsRepository {
  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }
}
