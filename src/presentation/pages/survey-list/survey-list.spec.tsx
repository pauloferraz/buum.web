import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyList from '.'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'
import { SurveyModel } from '@/domain/models'

class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  async loadAll(): Promise<SurveyModel[]> {
    this.callsCount++
    return []
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
  test('Should present 4 items empty on start', () => {
    makeSut()
    const surveyList = screen.getByTestId('survey-content')
    expect(surveyList.querySelectorAll('div').length).toBe(4)
  })

  test('Should call LoadSurveyList', () => {
    const { loadSurveyListSpy } = makeSut()
    expect(loadSurveyListSpy.callsCount).toBe(1)
  })
})
