import { Prisma, Request } from '@prisma/client'
import { IRequestRepository } from './IRequest-repository'
import { prisma } from '@/lib/prisma'

export class PrismaRequestRepository implements IRequestRepository {
  async findById({
    id,
  }: Prisma.RequestWhereUniqueInput): Promise<Request | null> {
    const requestBar = await prisma.request.findUnique({
      where: {
        id,
      },
    })
    return requestBar
  }

  async create(data: Prisma.RequestCreateInput): Promise<Request> {
    const requestBar = await prisma.request.create({
      data,
    })

    return requestBar
  }

  async update(data: Prisma.RequestUpdateInput): Promise<Request> {
    const requestBar = await prisma.request.update({
      where: {
        id: data.id?.toString(),
      },
      data: {
        status: data.status,
      },
    })
    return requestBar
  }

  async listRequestForEvent(
    data: Prisma.RequestWhereInput,
  ): Promise<Request[]> {
    const requests = await prisma.request.findMany({
      where: { event_id: data.event_id },
    })

    return requests
  }

  async listRequesrForBar(data: Prisma.RequestWhereInput): Promise<Request[]> {
    const requests = await prisma.request.findMany({
      where: {
        bar_id: data.bar_id,
      },
    })

    return requests
  }
}
