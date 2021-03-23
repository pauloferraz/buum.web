import styled from 'styled-components'

export const SurveyResultEmptyWrap = styled.div`
  min-height: 110px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.25s;
  flex: 0 0 calc(50% - 32px);
  width: 100%;
  margin-bottom: 32px;
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
`

export const SurveyListEmptyWrap = styled.div`
  min-height: 50px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.25s;
  flex: 0 0 calc(50% - 32px);
  width: 100%;
  margin-bottom: 10px;
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
`
