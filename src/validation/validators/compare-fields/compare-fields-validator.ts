import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class CompareFieldsValidation implements FieldValidation {
  constructor(readonly field: string, private readonly fieldToCompare: string) {}
  validate(value: string): Error {
    return value !== this.fieldToCompare ? new InvalidFieldError() : null
  }
}
