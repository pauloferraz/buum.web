import React from 'react'

import { SurveyListEmptyWrap, SurveyResultEmptyWrap } from './styles'

const SurveyResultEmpty: React.FC = () => {
  return (
    <div data-testid='survey-result-empty'>
      <SurveyResultEmptyWrap />
      <SurveyListEmptyWrap />
      <SurveyListEmptyWrap />
      <SurveyListEmptyWrap />
      <br />
      <SurveyListEmptyWrap />
    </div>
  )
}

export default SurveyResultEmpty
