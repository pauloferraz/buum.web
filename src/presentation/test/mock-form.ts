import { fireEvent, screen } from '@testing-library/react'

export const populateField = (fieldName: string, fieldValue: string): void => {
  const inputName = screen.getByTestId(fieldName)
  fireEvent.input(inputName, { target: { value: fieldValue } })
}
