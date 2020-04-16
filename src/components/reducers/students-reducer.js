export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-STUDENT_FULFILLED": {
            const students = payload.data.map((student, i) => {
                return { ...student, index: i }
            })
            console.log('FETCH-STUDENT_FULFILLED:', students)
            return [...students]
        }
        case "FETCH-CURRENT-STUDENT_FULFILLED": {
            const current_student = payload.data
            if (current_student) {
                let foundCurrent = false
                const students = state.map((student) => {
                    if (student.id !== current_student.id && !foundCurrent) {
                        return { ...student, status: 'previous' }
                    }
                    if (student.id === current_student.id && !foundCurrent) {
                        foundCurrent = true
                        return { ...student, status: 'current' }
                    }
                    return { ...student, status: 'next' }
                })
                return [...students]
            }
            return state
        }
        case "UPDATE-CURRENT-STUDENT": {
            let foundCurrent = false
            const students = state.map((student) => {
                if (student.id !== payload.id && !foundCurrent) {
                    return { ...student, status: 'previous' }
                }
                if (student.id === payload.id && !foundCurrent) {
                    foundCurrent = true
                    return { ...student, status: 'current' }
                }
                return { ...student, status: 'next' }
            })
            return [...students]
        }
        default: {
            return state
        }
    }
}