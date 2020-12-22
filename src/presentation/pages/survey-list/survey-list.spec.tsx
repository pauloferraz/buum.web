import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyList from '.'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'
import { SurveyModel } from '@/domain/models'
import { mockSurveyListModel } from '@/domain/test'

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

const makeSut = (): SutTypes => {
  const loadSurveyListSpy = new LoadSurveyListSpy()

  render(
    <ThemeProvider theme={light}>
      <SurveyList loadSurveyList={loadSurveyListSpy} />
    </ThemeProvider>
  )

  return { loadSurveyListSpy }
}

describe('SurveyList Page', () => {
  test('Should present 4 items empty on start', async () => {
    makeSut()
    expect(screen.getAllByTestId('survey-item-empty')).toHaveLength(4)
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
  })
})
