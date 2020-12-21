import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import SurveyList from '.'

describe('SurveyList Page', () => {
  test('Should present 4 items empty on start', () => {
    render(
      <ThemeProvider theme={light}>
        <SurveyList />
      </ThemeProvider>
    )
    const surveyList = screen.getByTestId('survey-content')
    expect(surveyList.querySelectorAll('div').length).toBe(4)
  })
})
