import { axios } from '../custom-module'

export const fetchCurrentStudent = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-CURRENT-STUDENT', payload: axios.get('current-student') })
    }
}

export const updateCurrentStudent = (student) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
    }
}

