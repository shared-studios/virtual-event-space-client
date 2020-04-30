
export default (state = {}, { type, payload }) => {
    if (type.endsWith("_REJECTED")) {
        type = "ERROR"
    }
    switch (type) {
        case "ERROR": {
            const index = Object.values(state).length
            if (payload?.response?.status === 500) {
                state[index] = { message: "request field", index }
                return { ...state }
            }
            if (payload?.response?.data) {
                state[index] = { message: payload.response.data, index }
                return { ...state }
            }
            if (payload?.message === "Network Error") {
                state[index] = { message: payload.message, index }
                return { ...state }
            } if (payload?.message) {
                state[index] = { message: payload.message, index }
                return { ...state }
            }
            state[index] = JSON.stringify(payload)
            return { ...state }
        }
        case "REMOVE ERROR": {
            delete state[payload]
            return { ...state }
        }
        default: {
            return state
        }
    }
}