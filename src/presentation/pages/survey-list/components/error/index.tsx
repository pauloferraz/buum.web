import React, { useContext } from 'react'
import { SurveyContext } from '@/presentation/pages/survey-list/components'
import { SurveyErrorWrap, SurveyErrorText } from './styles'

const Error: React.FC = () => {
  const { state } = useContext(SurveyContext)

  return (
    <SurveyErrorWrap data-testid='survey-error'>
      <SurveyErrorText>{state.error}</SurveyErrorText>
    </SurveyErrorWrap>
  )
}

export default Error
