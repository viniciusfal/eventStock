export class EventIsNotExistsError extends Error {
  constructor() {
    super('This Event is not exists ')
  }
}
