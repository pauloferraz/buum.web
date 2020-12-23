import React from 'react'

import { SurveyItemEmptyWrap } from './styles'

const SurveyItemEmpty: React.FC = () => {
  return (
    <>
      <SurveyItemEmptyWrap data-testid='survey-item-empty' />
      <SurveyItemEmptyWrap data-testid='survey-item-empty' />
      <SurveyItemEmptyWrap data-testid='survey-item-empty' />
      <SurveyItemEmptyWrap data-testid='survey-item-empty' />
    </>
  )
}

export default SurveyItemEmpty
