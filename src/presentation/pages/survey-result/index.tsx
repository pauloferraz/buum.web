import React, { useEffect, useState } from 'react'
import { Button, Header, Error } from '@/presentation/components'
import { SurveyResultEmpty } from './components'
import {
  PageWrap,
  PageContent,
  SurveyWrap,
  SurveyHeader,
  SurveyTitle,
  SurveyDate,
  SurveyDateMini,
  SurveyDateText,
  SurveyList,
  SurveyItem
} from './styles'
import { LoadSurveyResult } from '@/domain/usecases/load-survey-result'
import { SurveyResultModel } from '@/domain/models'
import { useErrorHandler } from '@/presentation/hooks'

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  const handlerError = useErrorHandler((error: Error) =>
    setState(old => ({ ...old, error: error.message }))
  )

  const [state, setState] = useState({
    isLoading: true,
    error: '',
    surveyResult: null as SurveyResultModel
  })

  useEffect(() => {
    loadSurveyResult
      .load()
      .then(surveyResult =>
        setState(old => ({
          ...old,
          isLoading: false,
          surveyResult
        }))
      )
      .catch(handlerError)
  }, [])

  return (
    <>
      <PageWrap>
        <PageContent>
          <Header />
          <SurveyWrap data-testid='survey-result'>
            {state.isLoading && <SurveyResultEmpty />}
            {state.error && <Error error={state.error} />}
            {state.surveyResult && (
              <>
                <SurveyHeader>
                  <SurveyDate>
                    <SurveyDateMini data-testid='month'>
                      {state.surveyResult.date
                        .toLocaleString('pt-BR', { month: 'short' })
                        .replace('.', '')}
                    </SurveyDateMini>
                    <SurveyDateText data-testid='day'>
                      {state.surveyResult.date.getDate().toString().padStart(2, '0')}
                    </SurveyDateText>
                    <SurveyDateMini data-testid='year'>
                      {state.surveyResult.date.getFullYear()}
                    </SurveyDateMini>
                  </SurveyDate>
                  <SurveyTitle data-testid='question'>
                    {state.surveyResult.question}
                  </SurveyTitle>
                </SurveyHeader>
                <SurveyList data-testid='answers'>
                  {state.surveyResult.answers.map(answer => (
                    <SurveyItem
                      data-testid='answer-wrap'
                      key={answer.answer}
                      className={answer.isCurrentAccountAnswer ? 'active' : ''}
                    >
                      {answer.image && (
                        <img
                          data-testid='image'
                          src={answer.image}
                          alt={answer.answer}
                        />
                      )}
                      <span data-testid='answer'>{answer.answer}</span>
                      <strong data-testid='percent'>{answer.percent}%</strong>
                    </SurveyItem>
                  ))}
                </SurveyList>
                <Button text='Responder' />
              </>
            )}
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyResult
