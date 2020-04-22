import { axios } from '../custom-module'

export const fetchCurrentStudent = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-CURRENT-STUDENT', payload: axios.get('student/current') })
    }
}

export const updateReaction = (student) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-REACTION', payload: student })
    }
}

