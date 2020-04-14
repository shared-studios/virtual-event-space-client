import { axios } from '../custom-module'

export const fetchMessages = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-MESSAGES', payload: axios.get('message') })
    }
}