export class useralreadyexists extends Error {
  constructor() {
    super('Email already Exists')
  }
}
