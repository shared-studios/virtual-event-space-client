
export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-GRADUATE_FULFILLED": {
            state = [payload.data, ...state]
            if (state.length > 4) {
                state.pop()
            }
            return state
        }
        default: {
            return state
        }
    }
}