import styled from 'styled-components'

export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 0;
`

type Props = {
  textAlign?: string
}

export const Column = styled.div<Props>`
  flex: 0 0 calc(50% - 32px);
  max-width: calc(50% - 32px);
  text-align: ${props => props.textAlign || ''};
  margin: 0 16px;
  padding: 0;
`
export const HeaderName = styled.h4`
  font-size: 18px;
  line-height: 1.33333;
  font-weight: 500;
`

export const HeaderTitle = styled.h2`
  font-size: 40px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: -1px;
`
export const ButtonLogout = styled.button`
  background: unset;
  border: unset;
  cursor: pointer;

  &:hover {
    svg {
      stroke: ${props => props.theme.colors.accent_1};
    }
  }
`
