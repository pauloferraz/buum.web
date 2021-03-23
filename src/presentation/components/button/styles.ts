import styled from 'styled-components'

export const ButtonWrap = styled.button`
  line-height: 40px;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  margin-top: 25px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    transition: 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      filter: brightness(1);
      cursor: default;
    }
  }
`
