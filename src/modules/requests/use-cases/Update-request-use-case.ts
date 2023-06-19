import { IRequestRepository } from '../repositories/IRequest-repository'

interface updateRequestUseCaseRequest {
  id: string
  status: string
  bar_id: string
  event_id: string
}

export class UpdateRequestUseCase {
  constructor(private requestRepository: IRequestRepository) {}

  async execute({ status, bar_id, event_id, id }: updateRequestUseCaseRequest) {
    const requestBar = await this.requestRepository.update({
      id,
      status,
      bar: { connect: { id: bar_id } },
      event: { connect: { id: event_id } },
    })

    return requestBar
  }
}
