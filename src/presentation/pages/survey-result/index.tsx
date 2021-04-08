import React, { useEffect, useState } from 'react'
import { Button, Header, Error } from '@/presentation/components'
import { SurveyResultEmpty, Answer, SurveyResultContext } from './components'
import {
  PageWrap,
  PageContent,
  SurveyWrap,
  SurveyHeader,
  SurveyTitle,
  SurveyDate,
  SurveyDateMini,
  SurveyDateText,
  AnswerList
} from './styles'
import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'
import { SurveyResultModel } from '@/domain/models'
import { useErrorHandler } from '@/presentation/hooks'

type Props = {
  loadSurveyResult: LoadSurveyResult
  saveSurveyResult: SaveSurveyResult
}

const SurveyResult: React.FC<Props> = ({
  loadSurveyResult,
  saveSurveyResult
}: Props) => {
  const handlerError = useErrorHandler((error: Error) =>
    setState(old => ({ ...old, error: error.message }))
  )

  const [state, setState] = useState({
    isLoading: true,
    error: '',
    surveyResult: null as SurveyResultModel
  })

  const onAnswer = (answer: string): void => {
    setState(old => ({ ...old, isLoading: true }))
    saveSurveyResult.save({ answer }).then().catch()
  }

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
          <SurveyResultContext.Provider value={{ onAnswer }}>
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
                        {state.surveyResult.date
                          .getDate()
                          .toString()
                          .padStart(2, '0')}
                      </SurveyDateText>
                      <SurveyDateMini data-testid='year'>
                        {state.surveyResult.date.getFullYear()}
                      </SurveyDateMini>
                    </SurveyDate>
                    <SurveyTitle data-testid='question'>
                      {state.surveyResult.question}
                    </SurveyTitle>
                  </SurveyHeader>
                  <AnswerList data-testid='answers'>
                    {state.surveyResult.answers.map(answer => (
                      <Answer answer={answer} key={answer.answer} />
                    ))}
                  </AnswerList>
                  <Button text='Responder' />
                </>
              )}
            </SurveyWrap>
          </SurveyResultContext.Provider>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyResult
