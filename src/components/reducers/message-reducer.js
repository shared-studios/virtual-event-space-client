
export default (state = [], { type, payload }) => {
    switch (type) {
        case "POST-MESSAGES_FULFILLED": {
            state.push(payload.data)
            return [...state]
        }
        case "FETCH-MESSAGES_FULFILLED": {
            return payload.data
        }
        default: {
            return state
        }
    }
}