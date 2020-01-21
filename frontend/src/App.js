
import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './services/history'
import Page from './components/Page'


export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/page" />} />
          <Route path="/page" component={Page} />
        </Switch>
      </div>
    </Router>
  )
}
