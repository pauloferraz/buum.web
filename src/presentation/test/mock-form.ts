import { fireEvent, RenderResult } from '@testing-library/react'

export const populateField = (
  sut: RenderResult,
  fieldName: string,
  fieldValue: string
): void => {
  const inputName = sut.getByTestId(fieldName)
  fireEvent.input(inputName, { target: { value: fieldValue } })
}
