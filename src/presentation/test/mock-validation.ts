import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validade(inputName: string, inputValue: string): string {
    return this.errorMessage
  }
}
