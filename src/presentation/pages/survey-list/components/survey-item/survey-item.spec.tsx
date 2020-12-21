import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyItem from '.'
import { mockSurveyModel } from '@/domain/test'

describe('SurveyList Page', () => {
  test('Should render correct values', () => {
    const survey = mockSurveyModel()
    survey.date = new Date('2020-01-10T00:00:00')
    render(
      <ThemeProvider theme={light}>
        <SurveyItem survey={survey} />
      </ThemeProvider>
    )
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('10')
    expect(screen.getByTestId('month')).toHaveTextContent('jan')
    expect(screen.getByTestId('year')).toHaveTextContent('2020')
  })
})
