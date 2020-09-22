import styled from 'styled-components'

export const Container = styled.div`
  background:${props => props.theme.colors.secondary};
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export const LoginContainer = styled.div`
  background:${props => props.theme.colors.white};
  width:450px;
  padding:20px;
  border-radius:4px;
  box-shadow: 0px 0px 5px -2px ${props => props.theme.colors.black};
`

export const FormLogin = styled.form`
  display:flex;
  flex-direction:column;
`

export const Title = styled.h1`
  font-size:24px;
  font-weight: 500;
`

export const SubTitle = styled.p`
  font-size:14px;
  margin-bottom:15px;
`

export const Input = styled.input`
  line-height:40px;
  border:1px solid ${props => props.theme.colors.grey};
  margin-top:10px;
  padding:0px 15px;
  border-radius:4px;

  &:focus{
    outline-color:${props => props.theme.colors.black};
  }
`

export const Button = styled.button`
  line-height:40px;
  border:1px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.secondary};
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
