import { axios } from '../custom-module'

export const authorizeUser = (event_id, user_id) => {
    return (dispatch) => axios.get(`authorize/${event_id}/${user_id}`)
        .then(({ data: { user, event, token } }) => {
            dispatch({ type: 'FETCH-EVENT_FULFILLED', payload: event })
            dispatch({ type: 'FETCH-USER_FULFILLED', payload: { token, ...user } })
        }).catch((error) => {
            dispatch({ type: 'UNAUTHORIZED', payload: error })
        })
}