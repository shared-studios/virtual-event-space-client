import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import LandingPage from './components/landing-page'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import configure from './components/custom-module'

configure({
  api_url: 'https://95zj2rj7ng.execute-api.us-east-2.amazonaws.com/Dev',
  socket_url: ''
})

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/:event_id/:user_id" exact component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))