import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validade(inputName: string, field: object): string {
    return this.errorMessage
  }
}
