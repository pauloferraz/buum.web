import { createGlobalStyle } from 'styled-components'
import * as color from './colors'

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Roboto', sans-serif;
  color: ${color.black};
}

  body {
    margin: 0;
    padding: 0;
    background: ${color.grey};
    box-sizing: border-box;
  }
`

export default GlobalStyle
