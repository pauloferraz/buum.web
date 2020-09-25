import styled from 'styled-components'

export const InputWrap = styled.div`

  input{
    line-height:40px;
    background:${props => props.theme.colors.grey};
    border:1px solid ${props => props.theme.colors.grey};
    margin-top:10px;
    padding:0px 15px;
    border-radius:4px;
    width:100%;

    &:focus{
      outline-color:${props => props.theme.colors.primary};
      background:${props => props.theme.colors.white};
    }
  }
`
