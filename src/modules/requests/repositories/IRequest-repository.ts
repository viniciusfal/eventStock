import { Prisma, Request } from '@prisma/client'

export interface IRequestRepository {
  create(data: Prisma.RequestCreateInput): Promise<Request>
  update(data: Prisma.RequestUpdateInput): Promise<Request>
  listRequesrForBar(data: Prisma.RequestWhereInput): Promise<Request[]>
  listRequestForEvent(data: Prisma.RequestWhereInput): Promise<Request[]>
  findById({ id }: Prisma.RequestWhereUniqueInput): Promise<Request | null>
}
