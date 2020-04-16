import { axios } from '../custom-module'

export const fetchCurrentStudent = () => {
    return (dispatch) => {
        axios.get('student')
            .then((res) => {
                dispatch({ type: 'FETCH-STUDENT_FULFILLED', payload: res })
                dispatch({ type: 'FETCH-CURRENT-STUDENT', payload: axios.get('current-student') })
            })

    }
}

export const updateCurrentStudent = (student) => {
    return (dispatch) => {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios.put('current-student', student, axiosConfig).then(() => {
            dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
        })
    }
}

