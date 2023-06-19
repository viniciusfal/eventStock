import { IRequestRepository } from '../repositories/IRequest-repository'

export class ListRequestsForEventUseCase {
  constructor(private requestRepository: IRequestRepository) {}
  async execute(event_id: string) {
    const requests = await this.requestRepository.listRequestForEvent({
      event_id,
    })

    return requests
  }
}
