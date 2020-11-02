import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Poppins', sans-serif;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

  body {
    background:${props => props.theme.colors.grey};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle
