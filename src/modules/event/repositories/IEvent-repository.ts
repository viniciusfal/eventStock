import { Event, Prisma } from '@prisma/client'

export interface IEventRepository {
  create(data: Prisma.EventCreateInput): Promise<Event>
  update(data: Prisma.EventUpdateInput): Promise<Event>
  updateEventeActive({ id, active }: Prisma.EventUpdateInput): Promise<Event>
  findById(id: string): Promise<Event | null>
  list(): Promise<Event[]>
  findByName(name: string): Promise<Event[] | null>
}
