import { combineReducers } from "redux"

import messages from './message-reducer'
import agendas from './agendas-reducer'
import user from './user-reducer'
import socket from './socket-reducer'

export default combineReducers({
    user,
    socket,
    agendas,
    messages,
})
