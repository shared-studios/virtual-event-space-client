export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return { ...payload, viewers: payload.viewers + 1 }
        }
        case 'UPDATE-VIDEO-REACTION': {
            console.log('UPDATE-VIDEO-REACTION:', payload)
            if (!state.emojis[payload.emoji]) {
                state.emojis[payload.emoji] = 0
            }
            state.emojis[payload.emoji]++
            return { ...state, emojis: { ...state.emojis } }
        }
        case 'UPDATE-VIDEO-OFFSET': {
            console.log('UPDATE-VIDEO-OFFSET:', payload)
            const { segment_id, offset_value } = payload
            state.video_offset[segment_id] = offset_value
            return { ...state }
        }
        case 'VIDEO-REACTION_FULFILLED': {
            if (!state.emojis[payload.data]) {
                state.emojis[payload.data] = 0
            }
            state.emojis[payload.data]++
            return { ...state, emojis: { ...state.emojis } }
        }
        case 'UPDATE-EVENT-VIEWER': {
            if (payload === 'add') {
                return { ...state, viewers: state.viewers + 1 }
            }
            return { ...state, viewers: state.viewers - 1 }
        }
        default: {
            return state
        }
    }
}