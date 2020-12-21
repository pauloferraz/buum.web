import React from 'react'
import Sidebar from '@/presentation/components/sidebar'
import Header from '@/presentation/components/header'
import { SurveyItem, SurveyItemEmpty } from './components'

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
            <SurveyContent>
              <SurveyItemEmpty />
              <SurveyItem />
            </SurveyContent>
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyList
