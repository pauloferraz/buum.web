import styled from 'styled-components'

export const SurveyItemWrap = styled.div`
  min-height: 100px;
  flex: 0 0 calc(50% - 32px);
  width: calc(50% - 32px);
  margin: 32px 16px 0;
  background: ${props => props.theme.colors.primary};
  padding: 10px 15px 10px 10px;
  position: relative;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s;

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

  &:hover {
    transform: translateY(-2px);
    transition: all 0.25s;
  }

  &:empty {
    flex: 0 0 calc(50% - 32px);
    width: calc(50% - 32px);
    margin: 32px 16px 0;
    background-color: #ddd;
    position: relative;
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    &:before {
      background: #ccc;
    }
  }
`

export const SurveyDate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 88px;
  height: 80px;
  margin-right: 10px;
  border-radius: 12px;
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

export const SurveyTitle = styled.p`
  color: ${props => props.theme.colors.white};
`
