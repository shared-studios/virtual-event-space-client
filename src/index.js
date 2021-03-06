import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "./components/store"
import LandingPage from './components/landing-page'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import configure from './components/custom-module'
import Error from './components/error'
import Authentication from './components/authentication'

configure({
    api_url: 'https://95zj2rj7ng.execute-api.us-east-2.amazonaws.com/Dev',
    socket_url: 'wss://k1qgj64ibe.execute-api.us-east-2.amazonaws.com/Dev'
})

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Authentication path="/:event_id/:user_id" exact component={LandingPage} />
                    <Route path="/" component={() => <h1>404</h1>} />
                </Switch>
            </BrowserRouter>
            <Error />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))