import { axios } from '../custom-module'

export const fetchStudents = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-STUDENTS', payload: axios.get('student') })
    }
}

export const sendReaction = (student_id, emoji) => {
    return (dispatch) => {
        dispatch({ type: 'STUDENT-REACTION', payload: axios.patch(`student/reaction/${student_id}/${emoji}`) })
    }
}
