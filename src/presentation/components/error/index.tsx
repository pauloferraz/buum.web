import React from 'react'
import { SurveyErrorWrap, SurveyErrorText } from './styles'

type Props = {
  error: string
}

const Error: React.FC<Props> = ({ error }: Props) => {
  return (
    <SurveyErrorWrap data-testid='survey-error'>
      <SurveyErrorText>{error}</SurveyErrorText>
    </SurveyErrorWrap>
  )
}

export default Error
