import { createStore } from "redux";
import reducer from "./reducer"

const storage = localStorage.getItem('storage')
const user = JSON.parse(storage) || {}

export default createStore(reducer, {
    socket: false,
    agendas: [],
    current_agenda: { time: '', title: '', description: '' },
    user: {
        ...user,
        authenticated: false,
        signed_in: user.token ? true : false
    },
    messages: []
})