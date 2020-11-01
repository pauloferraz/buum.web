import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin:20px 0px;
`

export const TextError = styled.p`
  color: ${(props) => props.theme.colors.accent_1};
`
