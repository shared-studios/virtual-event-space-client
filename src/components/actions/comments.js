import { axios } from '../custom-module'

export const fetchComments = () => {
    return (dispatch, getState) => {
        axios.get('comments').then(({ data }) => {
            const { user: { user_id } } = getState()
            dispatch({ type: 'FETCH-COMMENTS_FULFILLED', payload: { comments: data, user_id } })
        }).catch((error) => {
            dispatch({ type: 'ERROR', payload: error })
        })

    }
}

export const postComment = (comment) => {
    return (dispatch) => {
        dispatch({ type: 'POST-COMMENT', payload: axios.post('comments', comment, { headers: { "Content-Type": "text/plain" } }) })
    }
}