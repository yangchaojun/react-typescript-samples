import * as React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { LoginPageComponent } from './pages/loginPage'
import { PageB } from './pages/pageB'

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginPageComponent} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  )
}
