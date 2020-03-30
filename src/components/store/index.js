import { createStore } from "redux";
// import reducer from "./reducer"
import reducer from "./reducer copy"

const token = localStorage.getItem('token')

export default createStore(reducer, {
    socket: false,
    user: {
        authenticated: false,
        token: token ? JSON.parse(localStorage.getItem('token')) : {},
        signed_in: token ? true : false
    },
    rooms: {}
})