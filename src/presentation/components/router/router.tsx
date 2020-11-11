import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from '@/presentation/theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'

import Signup from '@/presentation/pages/signup'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={makeLogin} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
