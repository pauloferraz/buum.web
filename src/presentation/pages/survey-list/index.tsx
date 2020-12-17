import React from 'react'
import Sidebar from '@/presentation/components/sidebar'
import Header from '@/presentation/components/header'

import {
  PageWrap,
  PageContent,
  PageTitle,
  SurveyWrap,
  SurveyContent,
  SurveyItem,
  SurveyDate,
  SurveyDateMini,
  SurveyDateText,
  SurveyTitle
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
              <SurveyItem>
                <SurveyDate>
                  <SurveyDateMini>nov</SurveyDateMini>
                  <SurveyDateText>23</SurveyDateText>
                  <SurveyDateMini>2020</SurveyDateMini>
                </SurveyDate>
                <SurveyTitle>Qual seu framework favorito?</SurveyTitle>
              </SurveyItem>
              <SurveyItem />
            </SurveyContent>
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyList
