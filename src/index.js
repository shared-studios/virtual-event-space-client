import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import LandingPage from './components/landing-page'
import { Route, BrowserRouter, Switch } from "react-router-dom"

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