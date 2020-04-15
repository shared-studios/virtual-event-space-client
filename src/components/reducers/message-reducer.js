
export default (state = [], { type, payload }) => {
    switch (type) {

        case "FETCH-MESSAGES_FULFILLED": {
            return payload.data
        } case "POST-MESSAGES_FULFILLED": {
            state.push(payload.data)
            return [...state]
        }
        case "NEW-MESSAGE": {
            state.push(payload)
            return [...state]
        }
        default: {
            return state
        }
    }
}