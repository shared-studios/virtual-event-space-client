
export default (state = [], { type, payload }) => {
    switch (type) {

        case "FETCH-MESSAGES_FULFILLED": {
            return payload.data
        } case "POST-MESSAGES_FULFILLED": {
            state.push(payload.data)
            return [...state]
        }
        case "NEW-MESSAGE": {
            console.log(payload)
            if (!payload.approved) {
                const newState = state.filter((message) => message.time_stamp !== payload.time_stamp)
                console.log(newState)
                return [...newState]
            }

            const found = state.find((message) => message.time_stamp === payload.time_stamp)
            console.log(found)
            if (!found && payload.approved) {
                state.push(payload)
                return [...state]
            }

            return [...state]
        }
        default: {
            return state
        }
    }
}