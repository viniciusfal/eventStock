import { Prisma, Event } from '@prisma/client'
import { IEventRepository } from './IEvent-repository'
import { prisma } from '@/lib/prisma'

export class PrismaEventRepository implements IEventRepository {
  async create(data: Prisma.EventCreateInput): Promise<Event> {
    const event = await prisma.event.create({
      data,
    })

    return event
  }

  async update({
    id,
    name,
    status,
    initEventDate,
    finishEventDate,
  }: Prisma.EventUpdateInput): Promise<Event> {
    const event = await prisma.event.update({
      where: {
        id: id?.toString(),
      },
      data: {
        name,
        status,
      },
    })

    return event
  }

  async updateEventeActive({
    id,
    active,
  }: Prisma.EventUpdateInput): Promise<Event> {
    const event = await prisma.event.update({
      where: {
        id: id?.toString(),
      },
      data: {
        active,
      },
    })

    return event
  }

  async list(): Promise<Event[]> {
    const events = await prisma.event.findMany()

    return events
  }

  async findById(id: string): Promise<Event | null> {
    const event = await prisma.event.findUnique({
      where: {
        id,
      },
    })
    return event
  }

  async findByName(name: string): Promise<Event[] | null> {
    const event = await prisma.event.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    })

    return event
  }
}
