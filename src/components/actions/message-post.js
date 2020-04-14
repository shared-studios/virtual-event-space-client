import { axios } from '../custom-module'

export const postMessages = (message) => {
    return (dispatch) => {
        dispatch({
            type: 'POST-MESSAGES', payload: axios.post('message', message, {
                headers: {
                    "Content-Type": "text/plain"
                }
            })
        })
    }
}