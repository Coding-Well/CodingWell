import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Welcome from './Welcome/Welcome'
import Login from './Auth/Login'

export default class App extends Component {
  render () {
    return (
      <div className = 'forcms'>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/welcome' component = { Welcome }></Route>
            <Route exact path = '/login' component = { Login }></Route>
            <Redirect from = '/' to = '/welcome'></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
