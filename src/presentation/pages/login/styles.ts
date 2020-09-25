import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export const LoginContainer = styled.div`
  background:${props => props.theme.colors.white};
  width:450px;
  padding:30px;
  border-radius:15px;
  box-shadow: 0px 0px 80px #e2e2e2;
`

export const FormLogin = styled.form`
  display:flex;
  flex-direction:column;
`

export const Title = styled.h1`
  font-size:24px;
  font-weight: 600;
  letter-spacing: -1px;
`

export const SubTitle = styled.p`
  font-size:14px;
  margin-bottom:15px;
`

export const Button = styled.button`
  line-height:40px;
  border:1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primary};
  color:${props => props.theme.colors.white};
  margin-top:25px;
  border-radius:4px;
  font-size:16px;

  &:hover{
    cursor:pointer;
    filter: brightness(0.8);
    transition: 0.3s ease-in-out;
  }

  &:focus{
    outline:none;
  }

  &:disabled {
    opacity:0.5;

    &:hover{
      filter: brightness(1);
      cursor:default;
    }
  }
`

export const LinkCreate = styled.span`
  font-size:12px;
  color:${props => props.theme.colors.black};
  margin-top: 15px;
  flex: 1;
  display: flex;
  justify-content: center;

  a {
    color:${props => props.theme.colors.secondary};
    padding: 0px 3px;
    text-decoration: underline;
  }
`
