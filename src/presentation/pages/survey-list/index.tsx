import React, { useEffect, useState } from 'react'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'
import { SurveyModel } from '@/domain/models'

import Sidebar from '@/presentation/components/sidebar'
import Header from '@/presentation/components/header'
import {
  SurveyItem,
  SurveyItemEmpty,
  SurveyError,
  SurveyContext
} from '@/presentation/pages/survey-list/components'

import {
  PageWrap,
  PageContent,
  PageTitle,
  SurveyWrap,
  SurveyContent
} from './styles'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: ''
  })

  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then(surveys => setState({ ...state, surveys }))
      .catch(error => setState({ ...state, error: error.message }))
  }, [])

  return (
    <>
      <Sidebar />
      <PageWrap>
        <PageContent>
          <Header />
          <SurveyWrap>
            <PageTitle>Minhas Enquetes</PageTitle>
            <SurveyContext.Provider value={{ state, setState }}>
              <SurveyContent data-testid='survey-content'>
                {state.error.length ? (
                  <SurveyError />
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
            </SurveyContext.Provider>
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyList
