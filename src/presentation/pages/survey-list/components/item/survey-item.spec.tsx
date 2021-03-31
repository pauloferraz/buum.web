import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyItem from '.'
import { mockSurveyModel } from '@/domain/test'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (survey = mockSurveyModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ThemeProvider theme={light}>
      <Router history={history}>
        <SurveyItem survey={survey} />
      </Router>
    </ThemeProvider>
  )
  return {
    history
  }
}

describe('SurveyList Page', () => {
  test('Should render correct values', () => {
    const survey = Object.assign(mockSurveyModel(), {
      date: new Date('2020-01-10T00:00:00')
    })
    makeSut(survey)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('10')
    expect(screen.getByTestId('month')).toHaveTextContent('jan')
    expect(screen.getByTestId('year')).toHaveTextContent('2020')
  })

  test('Should render correct values', () => {
    const survey = Object.assign(mockSurveyModel(), {
      date: new Date('2019-05-03T00:00:00')
    })
    makeSut(survey)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('mai')
    expect(screen.getByTestId('year')).toHaveTextContent('2019')
  })

  test('Should go to SurveyResult', () => {
    const survey = mockSurveyModel()
    const { history } = makeSut(survey)
    fireEvent.click(screen.getByTestId('survey-link'))
    expect(history.location.pathname).toBe(`/surveys/${survey.id}`)
  })
})
