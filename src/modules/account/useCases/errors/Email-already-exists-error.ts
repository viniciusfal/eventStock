export class EmailAlreadyExists extends Error {
  constructor() {
    super('This email Already Exists')
  }
}
