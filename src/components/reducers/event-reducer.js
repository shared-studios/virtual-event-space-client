export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return payload
        }
        default: {
            return state
        }
    }
}