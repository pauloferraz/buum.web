export class InvalidCompareFieldError extends Error {
  constructor() {
    super('Senhas não conferem')
  }
}
