
export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-COMMENTS_FULFILLED": {
            return payload.data.reverse()
        } case "POST-COMMENT_FULFILLED": {
            return [payload.data, ...state]
        }
        case "UPDATE-COMMENT": {
            if (!payload.approved && payload.user_id !== window.config.id) {
                return state.filter(({ time_stamp }) => time_stamp !== payload.time_stamp)
            }

            const found = state.find(({ time_stamp }) => time_stamp === payload.time_stamp)
            if (found) {
                return state.map((comment) => {
                    if (comment.time_stamp === payload.time_stamp) {
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