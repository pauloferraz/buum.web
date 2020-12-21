import React, { useEffect } from 'react'
import { LoadSurveyList } from '@/domain/usecases/load-survey-list'

import Sidebar from '@/presentation/components/sidebar'
import Header from '@/presentation/components/header'
import { SurveyItemEmpty } from '@/presentation/pages/survey-list/components'

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
  useEffect(() => {
    loadSurveyList.loadAll()
  }, [])

  return (
    <>
      <Sidebar />
      <PageWrap>
        <PageContent>
          <Header />
          <SurveyWrap>
            <PageTitle>Minhas Enquetes</PageTitle>
            <SurveyContent data-testid='survey-content'>
              <SurveyItemEmpty />
            </SurveyContent>
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyList
