const currentStudent = {
    name: 'ELIZABETH LETO',
    degree: 'Bachelor of Arts in Communication Studies',
    image: 'https://lh3.googleusercontent.com/proxy/02nNQflO0YQF0Qa4OZKuUhhLWTrdBX9uwNclroZxxQA6FPdgQ7an8x86_TwIyqfaTLExTMiUDFfBpAttwgcjqx1y5cBt-jnSgrKkUoj024yA2l8rF-d1IlB6UmaEHVpFZG2ccuMfBKZpRHuT9ihmtbo'
}

export default (state = currentStudent, { type, payload }) => {
    switch (type) {
        case "FETCH-CURRENT-STUDENT_FULFILLED": {
            return payload.data
        }
        case "UPDATE-CURRENT-STUDENT": {
            return payload
        }
        default: {
            return state
        }
    }
}