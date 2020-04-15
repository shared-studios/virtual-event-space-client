import { axios } from '../custom-module'

export const fetchMessages = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-MESSAGES', payload: axios.get('message') })
    }
}

export const postMessages = (message) => {
    // return (dispatch) => {
    //     dispatch({
    //         type: 'POST-MESSAGES', payload: axios.post('message', message, {
    //             headers: {
    //                 "Content-Type": "text/plain"
    //             }
    //         })
    //     })
    // }
    axios.post('message', message, {
        headers: {
            "Content-Type": "text/plain"
        }
    })
}


export const newMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: 'NEW-MESSAGE', payload: message })
    }
}