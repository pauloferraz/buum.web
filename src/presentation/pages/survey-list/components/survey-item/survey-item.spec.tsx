import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyItem from '.'
import { mockSurveyModel } from '@/domain/test'

const makeSut = (survey = mockSurveyModel()): void => {
  render(
    <ThemeProvider theme={light}>
      <SurveyItem survey={survey} />
    </ThemeProvider>
  )
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
})
