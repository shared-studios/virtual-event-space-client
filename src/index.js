import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import Header from './components/header'
import programs from './components/programs'
import register from './components/register'
import KeynoteSpeakers from './components/keynote-speakers'
import BreakoutSessions from './components/breakout-sessions'
import { Route, BrowserRouter, Switch } from "react-router-dom"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/programs" exact component={programs} />
          <Route path="/register" exact component={register} />
          <Route path="/KeynoteSpeakers" exact component={KeynoteSpeakers} />
          <Route path="/BreakoutSessions" exact component={BreakoutSessions} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))