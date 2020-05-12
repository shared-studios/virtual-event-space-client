export default (state = { authenticated: false, loading: true }, { type, payload }) => {
    switch (type) {
        case "FETCH-USER_FULFILLED": {
            console.log("sign in success:", payload)
            window.config = { ...window.config, ...payload }
            return { ...state, ...payload, authenticated: true, loading: false }
        }
        case "UNAUTHORIZED": {
            if (payload?.response?.data?.message) {
                return { ...state, loading: false, message: payload.response.data.message }
            }
            else if (payload?.message) {
                return { ...state, loading: false, message: payload.message }
            } else {
                return { ...state, loading: false, message: 'Unknown error occurred.' }
            }
        }
        default: {
            return state
        }
    }
}