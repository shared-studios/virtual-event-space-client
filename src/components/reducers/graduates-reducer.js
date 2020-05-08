
export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'EMPTY-GRADUATE': {
            return {}
        }
        case "FETCH-GRADUATE_FULFILLED": {
            const { id } = payload.data
            return { ...state, [id]: { ...payload.data } }
        }
        case "GRADUATE-REACTION_FULFILLED": {
            const { graduate_id: id, type } = payload.data
            if (state[id]) {
                if (!state[id][type]) state[id][type] = { clicked: true, count: 0 }
                state[id][type].clicked = true
                state[id][type].count++
                return { ...state, [id]: { ...state[id] } }
            }
            return { ...state }
        }
        case 'UPDATE-GRADUATE-REACTION': {
            const { graduate_id: id, type } = payload
            if (state[id]) {
                if (!state[id][type]) state[id][type] = { clicked: false, count: 0 }
                state[id][type].count++
                return { ...state, [id]: { ...state[id] } }
            }
            return { ...state }
        }
        default: {
            return state
        }
    }
}

// {
//     "graduate_id": "1",
//     "type": "hands_rased"
// }