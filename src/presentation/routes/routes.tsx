import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '@/presentation/pages/login'
import GlobalStyles from '@/presentation/theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'

const Router: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
