import styled from 'styled-components'

export const SurveyItemEmptyWrap = styled.div`
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
  flex: 0 0 calc(50% - 32px);
  width: calc(50% - 32px);
  margin: 32px 16px 0;
  background-color: #ddd;
  position: relative;
  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  &:hover {
    transform: translateY(-2px);
    transition: all 0.25s;
  }

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
`
