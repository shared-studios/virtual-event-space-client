
export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-MESSAGES_FULFILLED": {
            return payload.data.reverse()
        } case "POST-MESSAGE_FULFILLED": {
            return [...state, payload.data].reverse()
        }
        case "NEW-MESSAGE": {
            if (!payload.approved && payload.user_id !== window.config.id) {
                return state.filter((message) => message.time_stamp !== payload.time_stamp)
            }

            const found = state.find((message) => message.time_stamp === payload.time_stamp)
            if (found) {
                return state.map((message) => {
                    if (message.time_stamp === payload.time_stamp) {
                        return payload
                    }
                    return message
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