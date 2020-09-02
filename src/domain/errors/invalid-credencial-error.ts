export class InvalidCredencialError extends Error {
  constructor() {
    super('Credenciais inválidas')
    this.name = 'InvalidCredencialError'
  }
}
