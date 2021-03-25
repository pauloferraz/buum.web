import React, { useEffect, useState } from 'react'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'
import { SurveyModel } from '@/domain/models'
import { Error, Header } from '@/presentation/components'
import {
  SurveyItem,
  SurveyItemEmpty
} from '@/presentation/pages/survey-list/components'

import {
  PageWrap,
  PageContent,
  PageTitle,
  SurveyWrap,
  SurveyContent
} from './styles'

import { useErrorHandler } from '@/presentation/hooks'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const handlerError = useErrorHandler((error: Error) =>
    setState({ ...state, error: error.message })
  )

  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: ''
  })

  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then(surveys => setState({ ...state, surveys }))
      .catch(handlerError)
  }, [])

  return (
    <>
      <PageWrap>
        <PageContent>
          <Header />
          <SurveyWrap>
            <PageTitle>Minhas Enquetes</PageTitle>
            <SurveyContent data-testid='survey-content'>
              {state.error.length ? (
                <Error error={state.error} />
              ) : (
                <>
                  {state.surveys.length ? (
                    state.surveys.map((survey: SurveyModel) => (
                      <SurveyItem key={survey.id} survey={survey} />
                    ))
                  ) : (
                    <SurveyItemEmpty />
                  )}
                </>
              )}
            </SurveyContent>
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyList
