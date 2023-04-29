import { Prisma, Bar } from '@prisma/client'
import { IBarsRepository } from './IBars-repository'
import { prisma } from '@/lib/prisma'

export class PrismaBarsRepository implements IBarsRepository {
  async create(data: Prisma.BarCreateInput): Promise<Bar> {
    const bar = await prisma.bar.create({
      data,
    })

    return bar
  }

  async update(data: Prisma.BarUpdateInput): Promise<Bar> {
    const bar = await prisma.bar.update({
      where: {
        id: data.id?.toString(),
      },
      data,
    })

    return bar
  }

  async findById(id: string): Promise<Bar | null> {
    const bar = await prisma.bar.findUnique({
      where: {
        id,
      },
    })
    return bar
  }

  async list(): Promise<Bar[]> {
    const bar = await prisma.bar.findMany()

    return bar
  }

  async remove(id: string): Promise<void> {
    await prisma.bar.delete({
      where: {
        id,
      },
    })
  }
}
