import { axios } from '../custom-module'

export const fetchStudents = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-STUDENTS', payload: axios.get('student') })
    }
}

export const sendReaction = (student_id, emoji) => {
    return (dispatch) => {
        dispatch({ type: 'STUDENT-REACTION', payload: axios.patch(`reaction/${student_id}/${emoji}`) })
    }
}

export const updateCurrentStudent = (student) => {
    return (dispatch) => {
        axios.put('current-student', student, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
        })
    }
}

