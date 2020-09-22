import React from 'react'
import ReactDOM from 'react-dom'
import Login from '@/presentation/pages/login/login'
import GlobalStyles from '@/main/theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import light from '@/main/theme/light'

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyles/>
    <Login/>
  </ThemeProvider>,
  document.getElementById('main'))
