import React from 'react'

import {
  SurveyItemWrap,
  SurveyDate,
  SurveyDateMini,
  SurveyDateText,
  SurveyTitle
} from './styles'

const SurveyItem: React.FC = () => {
  return (
    <SurveyItemWrap>
      <SurveyDate>
        <SurveyDateMini>nov</SurveyDateMini>
        <SurveyDateText>23</SurveyDateText>
        <SurveyDateMini>2020</SurveyDateMini>
      </SurveyDate>
      <SurveyTitle>Qual seu framework favorito?</SurveyTitle>
    </SurveyItemWrap>
  )
}

export default SurveyItem
