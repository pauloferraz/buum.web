import styled from 'styled-components'

export const SurveyErrorWrap = styled.div`
  width: 100%;
  margin: 50px 20px;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  background: ${props => props.theme.colors.grey_light};
`
export const SurveyErrorText = styled.span`
  color: ${props => props.theme.colors.alert};
  font-size: 14px;
`
