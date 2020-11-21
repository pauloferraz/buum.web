import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from '@/presentation/theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'

type Factory = {
  makeLogin: React.FC
  makeSignup: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={factory.makeLogin} />
          <Route path='/signup' exact component={factory.makeSignup} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
