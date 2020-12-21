import React from 'react'
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

const SurveyList: React.FC = () => {
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
