let storage = localStorage.getItem('storage')
storage = JSON.parse(storage) || {}
const user = {
    ...storage,
    authenticated: false,
    signed_in: !!storage.token
}


export default (state = user, { type, payload }) => {
    switch (type) {
        case "FETCH-USER_FULFILLED": {
            console.log("sign in success")
            window.config = { ...window.config, ...payload.data }
            localStorage.setItem('storage', JSON.stringify(payload.data))
            return { ...state, ...payload.data, authenticated: true }
        }
        case "AUTHENTICATED": {
            window.config = { ...window.config, ...state }
            return { ...state, authenticated: payload }
        }
        default: {
            return state
        }
    }
}