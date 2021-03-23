import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import { ApiContext } from '@/presentation/contexts'
import { LoadSurveyResultSpy, mockAccountModel } from '@/domain/test'
import SurveyResult from '.'

type SutTypes = {
  loadSurveyResultSpy: LoadSurveyResultSpy
}

const makeSut = (): SutTypes => {
  const loadSurveyResultSpy = new LoadSurveyResultSpy()
  render(
    <ApiContext.Provider
      value={{
        setCurrentAccount: jest.fn(),
        getCurrentAccount: () => mockAccountModel()
      }}
    >
      <ThemeProvider theme={light}>
        <SurveyResult loadSurveyResult={loadSurveyResultSpy} />
      </ThemeProvider>
    </ApiContext.Provider>
  )

  return { loadSurveyResultSpy }
}

describe('SurveyReult page', () => {
  test('Should present correct initial state', async () => {
    makeSut()
    const surveyResultEmpty = screen.getAllByTestId('survey-result-empty')
    expect(surveyResultEmpty).toBeTruthy()
    expect(screen.queryByTestId('survey-error')).not.toBeInTheDocument()
    await waitFor(() => surveyResultEmpty)
  })

  test('Should call LoadSurveyResult', async () => {
    const { loadSurveyResultSpy } = makeSut()
    await waitFor(() => screen.getAllByTestId('survey-result-empty'))
    expect(loadSurveyResultSpy.callsCount).toBe(1)
  })
})
