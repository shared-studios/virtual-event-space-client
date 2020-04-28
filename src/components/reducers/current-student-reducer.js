
export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-CURRENT-STUDENT_FULFILLED": {
            return payload.data
        }
        case "UPDATE-CURRENT-STUDENT": {
            return payload
        }
        case "STUDENT-REACTION_FULFILLED": {
            const { type, name, user_id } = payload.data
            if (!state.emojis) {
                state.emojis = {}
            }
            if (!state.emojis[type]) {
                state.emojis[type] = {}
            }
            state.emojis[type][user_id] = { name }
            return { ...state, emojis: { ...state.emojis } }
        }
        case "UPDATE-REACTION": {
            const { type, name, user_id } = payload
            if (!state.emojis) {
                state.emojis = {}
            }
            if (!state.emojis[type]) {
                state.emojis[type] = {}
            }
            state.emojis[type][user_id] = { name }
            return { ...state, emojis: { ...state.emojis } }
        }
        default: {
            return state
        }
    }
}