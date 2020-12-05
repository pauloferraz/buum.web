import styled from 'styled-components'

export const InputWrap = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    font-size: 12px;
    margin-left: 5px;
    color: ${props => props.theme.colors.black};
  }
  input {
    line-height: 40px;
    background: ${props => props.theme.colors.grey};
    border: 1px solid ${props => props.theme.colors.grey};
    margin-top: 2px;
    margin-bottom: 12px;
    padding: 0px 10px;
    border-radius: 4px;
    width: 100%;
    transition: all 500ms ease-in-out;
    outline: none;

    &::placeholder {
      color: #bbb;
      font-size: 12px;
    }

    &:focus {
      border: 1px solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.white};
    }
  }
`
export const ErrorMsg = styled.span`
  color: ${props => props.theme.colors.alert};
  font-size: 10px;
  margin: 2px 5px 0px 5px;
  font-weight: 500;
  float: right;
`
