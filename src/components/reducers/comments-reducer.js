
export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-COMMENTS_FULFILLED": {
            const { comments, user_id: id } = payload
            comments.forEach(comment => {
                const { time_stamp, user_id } = comment
                state[time_stamp] = { ...comment, me: (user_id === id) }
                delete state[time_stamp].user_id
            })
            console.log(state)
            return { ...state }
        } case "POST-COMMENT_FULFILLED": {
            const { time_stamp } = payload.data
            state[time_stamp] = { ...payload.data, me: true }
            delete state[time_stamp].user_id
            return { ...state }
        }
        case "UPDATE-COMMENT": {
            const { comment: { status, user_id, time_stamp }, user_id: id } = payload
            if (status === 'rejected' && user_id !== id) {
                delete state[time_stamp]
            } else {
                state[time_stamp] = { ...payload.comment, me: (user_id === id) }
                delete state[time_stamp].user_id
            }
            return { ...state }
        }
        default: {
            return state
        }
    }
}