import { SurveyModel } from '@/domain/models'
import React from 'react'

import {
  SurveyItemWrap,
  SurveyDate,
  SurveyDateMini,
  SurveyDateText,
  SurveyTitle
} from './styles'

type Props = {
  survey: SurveyModel
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  return (
    <SurveyItemWrap data-testid='survey-item'>
      <SurveyDate>
        <SurveyDateMini data-testid='month'>
          {survey.date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')}
        </SurveyDateMini>
        <SurveyDateText data-testid='day'>
          {survey.date.getDate().toString().padStart(2, '0')}
        </SurveyDateText>
        <SurveyDateMini data-testid='year'>
          {survey.date.getFullYear()}
        </SurveyDateMini>
      </SurveyDate>
      <SurveyTitle data-testid='question'>{survey.question}</SurveyTitle>
    </SurveyItemWrap>
  )
}

export default SurveyItem
