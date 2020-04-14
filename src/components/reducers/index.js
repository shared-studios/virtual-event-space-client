import { combineReducers } from "redux"

import messages from './message-reducer'
import current_agenda from './current-agenda-reducer'
import agendas from './agendas-reducer'
import user from './user-reducer'

export default combineReducers({
    user,
    agendas,
    current_agenda,
    messages
})
