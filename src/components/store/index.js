import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import reducer from "../reducers"

const middleware = applyMiddleware(createPromise(), createLogger(), thunk)

export default createStore(reducer, middleware)

// const storage = localStorage.getItem('storage')
// const user = JSON.parse(storage) || {}
// {
//     socket: false,
//     agendas: [],
//     current_agenda: { time_stamp: '', title: '', description: '' },
//     user: {
//         ...user,
//         authenticated: false,
//         signed_in: user.token ? true : false
//     },
//     messages: []
// }