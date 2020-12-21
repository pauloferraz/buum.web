import styled from 'styled-components'

export const PageWrap = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding-left: 256px;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  min-height: 100vh;
  background: ${props => props.theme.colors.grey_light};
`

export const PageContent = styled.div`
  width: 100%;
  max-width: 930px;
  padding: 0 50px 40px;
  margin: 0 auto;
`

export const PageTitle = styled.h6`
  font-size: 18px;
  line-height: 1.33333;
  margin-bottom: 20px;
  margin: 15px 15px 0px 15px;
  font-weight: 500;
`

export const SurveyWrap = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px 20px 40px 20px;
  border-radius: 24px;
`

export const SurveyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`
