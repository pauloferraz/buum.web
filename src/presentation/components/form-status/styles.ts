import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`

export const TextError = styled.p`
  background: ${props => props.theme.colors.alert};
  color: ${props => props.theme.colors.white};
  padding: 3px 15px;
  border-radius: 4px;
  font-size: 12px;
`
