import { IRequestRepository } from '../repositories/IRequest-repository'

export class ListRequestsForBarUseCase {
  constructor(private requestRepository: IRequestRepository) {}
  async execute(bar_id: string) {
    const requests = await this.requestRepository.listRequesrForBar({
      bar_id,
    })

    return requests
  }
}
