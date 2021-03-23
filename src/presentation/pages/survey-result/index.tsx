import React, { useEffect } from 'react'
import { Button, Header } from '@/presentation/components'
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

type Props = {
  loadSurveyResult: LoadSurveyResult
}

const SurveyResult: React.FC<Props> = ({ loadSurveyResult }: Props) => {
  useEffect(() => {
    loadSurveyResult.load().then().catch()
  }, [])

  return (
    <>
      <PageWrap>
        <PageContent>
          <Header />
          <SurveyWrap>
            <SurveyResultEmpty />
            <SurveyHeader>
              <SurveyDate>
                <SurveyDateMini data-testid='month'>JAN</SurveyDateMini>
                <SurveyDateText data-testid='day'>13</SurveyDateText>
                <SurveyDateMini data-testid='year'>2021</SurveyDateMini>
              </SurveyDate>
              <SurveyTitle>Uma enquete qualquer?</SurveyTitle>
            </SurveyHeader>
            <SurveyList>
              <SurveyItem>
                <img
                  src='https://cdn.auth0.com/blog/react-js/react.png'
                  alt='react'
                />
                <span>React</span>
                <strong>50%</strong>
              </SurveyItem>
              <SurveyItem className='active'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
                  alt='vue'
                />
                <span>Vue</span>
                <strong>30%</strong>
              </SurveyItem>
              <SurveyItem>
                <img
                  src='https://img2.gratispng.com/20180701/rht/kisspng-angularjs-logo-javascript-security-token-5b38e22b8a3f38.7851363415304545715663.jpg'
                  alt='react'
                />
                <span>Angular</span>
                <strong>20%</strong>
              </SurveyItem>
            </SurveyList>
            <Button text='Responder' />
          </SurveyWrap>
        </PageContent>
      </PageWrap>
    </>
  )
}

export default SurveyResult
