import { axios } from '../custom-module'

export const fetchComments = () => {
    return (dispatch) => dispatch({ type: 'FETCH-COMMENTS', payload: axios.get('comments') })
}

export const postComment = (comment) => {
    return (dispatch) => dispatch({ type: 'POST-COMMENT', payload: axios.post('comments', comment, { headers: { "Content-Type": "text/plain" } }) })
}