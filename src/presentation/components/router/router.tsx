import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from '@/presentation/theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'

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
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
