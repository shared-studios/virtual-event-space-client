export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-STUDENTS_FULFILLED": {
            const students = payload.data.map((student, i) => {
                return { ...student, index: i }
            })
            console.log('FETCH-STUDENT_FULFILLED:', students)
            return [...students]
        }
        case "UPDATE-CURRENT-STUDENT": {
            const students = state.map((student) => {
                if (student.student_id === payload.student_id) {
                    student.status = 'current'
                    return student
                }
                delete student.status
                return student
            })
            return [...students]
        }
        default: {
            return state
        }
    }
}