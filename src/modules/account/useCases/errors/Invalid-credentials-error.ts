export class InvalidCredentialsError extends Error {
  constructor() {
    super('Invalid Emailo or Password')
  }
}
