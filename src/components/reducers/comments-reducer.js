
export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-COMMENTS_FULFILLED": {
            return payload.data.reverse()
        } case "POST-COMMENT_FULFILLED": {
            return [payload.data, ...state]
        }
        case "UPDATE-COMMENT": {
            const { status, user_id, time_stamp } = payload
            if (status === 'rejected' && user_id !== window.config.user_id) {
                return state.filter(({ time_stamp: time }) => time !== time_stamp)
            }

            const found = state.find(({ time_stamp: time }) => time === time_stamp)
            if (found) {
                return state.map((comment) => {
                    if (comment.time_stamp === time_stamp) {
                        return payload
                    }
                    return comment
                })
            }
            if (!found) {
                return [payload, ...state]
            }
            return [...state]
        }
        default: {
            return state
        }
    }
}