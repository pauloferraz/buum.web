import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string
  inputName: string
  inputValue: string
  validade(inputName: string, inputValue: string): string {
    this.inputName = inputName
    this.inputValue = inputValue
    return this.errorMessage
  }
}
