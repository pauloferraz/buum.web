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

export const SurveyTitle = styled.h5`
  font-size: 18px;
  line-height: 1.33333;
  margin-left: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const SurveyWrap = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px 20px 40px 20px;
  border-radius: 24px;
`
export const SurveyHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  background: ${props => props.theme.colors.primary};

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 10px;
    right: 10px;
    height: 6px;
    border-radius: 0 0 6px 6px;
    background: #988fe0;
    transition: opacity 0.25s;
  }
`

export const SurveyDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 88px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 12px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.3);
`
export const SurveyDateMini = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33333;
`

export const SurveyDateText = styled.span`
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.5px;
  font-size: 32px;
  font-weight: 500;
`

export const SurveyList = styled.ul`
  margin-top: 30px;
`

export const SurveyItem = styled.li`
  list-style: none;
  height: 50px;
  margin: 10px 0px 0px 0px;
  padding: 4px 14px 4px 4px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.active,
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  img {
    height: 40px;
  }

  span {
    flex-grow: 1;
    margin-left: 10px;
  }
`
