import { axios } from '../custom-module'

export const fetchGraduate = (id) => {
    return (dispatch) => dispatch({
        type: 'FETCH-GRADUATE',
        payload: axios.get(`graduates/${id}`)
    })
}

export const sendReaction = (student_id, emoji) => {
    return (dispatch) => dispatch({
        type: 'GRADUATE-REACTION',
        payload: axios.patch(`graduates/react/${student_id}/${emoji}`)
    })
}


