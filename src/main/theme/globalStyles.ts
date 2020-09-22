import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

  body {
    background:${props => props.theme.colors.grey};
  }
`

export default GlobalStyle
