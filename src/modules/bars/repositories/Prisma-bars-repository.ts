import { Prisma, Bar } from '@prisma/client'
import { IBarsRepository } from './IBars-repository'
import { prisma } from '@/lib/prisma'

export class PrismaBarsRepository implements IBarsRepository {
  async create({ name, code, event }: Prisma.BarCreateInput): Promise<Bar> {
    const bar = await prisma.bar.create({
      data: {
        name,
        code,
        event,
      },
    })

    return bar
  }

  async update({ id, name, code, event }: Prisma.BarUpdateInput): Promise<Bar> {
    const bar = await prisma.bar.update({
      where: {
        id: id?.toString(),
      },
      data: {
        name,
        code,
        event,
      },
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

  async list({ event }: Prisma.BarWhereInput): Promise<Bar[]> {
    const bar = await prisma.bar.findMany({
      where: {
        event,
      },
    })

    return bar
  }

  async remove({ id }: Prisma.BarWhereUniqueInput): Promise<void> {
    await prisma.bar.delete({
      where: {
        id: id?.toString(),
      },
      include: { event: true },
    })
  }
}
