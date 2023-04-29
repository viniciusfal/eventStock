import { Bar, Prisma } from '@prisma/client'

export interface IBarsRepository {
  create(data: Prisma.BarCreateInput): Promise<Bar>
  update(data: Prisma.BarUpdateInput): Promise<Bar>
  findById(name: string): Promise<Bar | null>
  list(): Promise<Bar[]>
  remove(id: string): Promise<void>
}
