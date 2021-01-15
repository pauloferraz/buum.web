import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import { createMemoryHistory } from 'history'
import SurveyList from '.'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'
import { SurveyModel } from '@/domain/models'
import { mockAccountModel, mockSurveyListModel } from '@/domain/test'
import { UnexpectedError } from '@/domain/errors'
import { ApiContext } from '@/presentation/contexts'
import { Router } from 'react-router-dom'

class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()

  async loadAll(): Promise<SurveyModel[]> {
    this.callsCount++
    return this.surveys
  }
}

type SutTypes = {
  loadSurveyListSpy: LoadSurveyListSpy
}

const makeSut = (loadSurveyListSpy = new LoadSurveyListSpy()): SutTypes => {
  render(
    <ApiContext.Provider
      value={{
        setCurrentAccount: jest.fn(),
        getCurrentAccount: () => mockAccountModel()
      }}
    >
      <Router history={createMemoryHistory()}>
        <ThemeProvider theme={light}>
          <SurveyList loadSurveyList={loadSurveyListSpy} />
        </ThemeProvider>
      </Router>
    </ApiContext.Provider>
  )

  return { loadSurveyListSpy }
}

describe('SurveyList Page', () => {
  test('Should present 4 items empty on start', async () => {
    makeSut()
    expect(screen.getAllByTestId('survey-item-empty')).toHaveLength(4)
    expect(screen.queryByTestId('survey-error')).not.toBeInTheDocument()
    await waitFor(() => screen.getByTestId('survey-content'))
  })

  test('Should call LoadSurveyList', async () => {
    const { loadSurveyListSpy } = makeSut()
    expect(loadSurveyListSpy.callsCount).toBe(1)
    await waitFor(() => screen.getByTestId('survey-content'))
  })

  test('Should render SurveyItems on success', async () => {
    makeSut()
    await waitFor(() => screen.getByTestId('survey-content'))
    expect(screen.getAllByTestId('survey-item')).toHaveLength(3)
    expect(screen.queryByTestId('survey-error')).not.toBeInTheDocument()
  })

  test('Should render error on failure', async () => {
    const loadSurveyListSpy = new LoadSurveyListSpy()
    const error = new UnexpectedError()
    jest.spyOn(loadSurveyListSpy, 'loadAll').mockRejectedValueOnce(error)

    makeSut(loadSurveyListSpy)
    await waitFor(() => screen.getByTestId('survey-content'))

    expect(screen.getByTestId('survey-error')).toBeInTheDocument()
  })
})
