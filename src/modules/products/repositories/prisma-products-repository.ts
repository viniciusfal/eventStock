import { prisma } from '@/lib/prisma'
import { Prisma, Product } from '@prisma/client'
import { IProductsRepository } from './Iproducts-repository'

export class PrismaProductRepository implements IProductsRepository {
  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }

  async findByName(name: string): Promise<Product[] | null> {
    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    })

    return product
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return product
  }

  async list(): Promise<Product[]> {
    const products = await prisma.product.findMany()

    return products
  }

  async editProduct(
    id: string,
    name: string,
    quantity: number,
  ): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        quantity,
      },
    })

    return product
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id,
      },
    })
  }
}
