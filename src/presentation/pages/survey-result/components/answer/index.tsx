import { SurveyResultAnswerModel } from '@/domain/models'
import React, { useContext } from 'react'
import { SurveyResultContext } from '..'
import { AnswerItem } from '../../styles'

type Props = {
  answer: SurveyResultAnswerModel
}

const Answer: React.FC<Props> = ({ answer }: Props) => {
  const { onAnswer } = useContext(SurveyResultContext)
  const answerClick = (event: React.MouseEvent): void => {
    if (event.currentTarget.classList.contains('active')) {
      return null
    } else {
      onAnswer(answer.answer)
    }
  }

  return (
    <AnswerItem
      data-testid='answer-wrap'
      key={answer.answer}
      className={answer.isCurrentAccountAnswer ? 'active' : ''}
      onClick={answerClick}
    >
      {answer.image && (
        <img data-testid='image' src={answer.image} alt={answer.answer} />
      )}
      <span data-testid='answer'>{answer.answer}</span>
      <strong data-testid='percent'>{answer.percent}%</strong>
    </AnswerItem>
  )
}

export default Answer
