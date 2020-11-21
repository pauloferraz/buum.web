import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation,
  CompareFieldsValidation
} from '@/validation/validators'

import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  const field = faker.database.column()
  const fieldToCompare = faker.database.column()
  const length = faker.random.number()
  test('should return RequiredFieldValidation', () => {
    const validators = sut.field(field).required().build()
    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const validators = sut.field(field).email().build()
    expect(validators).toEqual([new EmailValidation(field)])
  })

  test('should return MinLengthValidation', () => {
    const validators = sut.field(field).min(length).build()
    expect(validators).toEqual([new MinLengthValidation(field, length)])
  })

  test('should return CompareFieldValidation', () => {
    const validators = sut.field(field).sameAs(fieldToCompare).build()
    expect(validators).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('should return a list of validations', () => {
    const validators = sut.field(field).required().min(length).email().build()
    expect(validators).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
