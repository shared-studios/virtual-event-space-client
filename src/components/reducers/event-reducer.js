export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return payload
        }
        case 'UPDATE-VIDEO-OFFSET': {
            console.log('UPDATE-VIDEO-OFFSET:', payload)
            return { ...state, video_offset: { ...state.video_offset, ...payload } }
        }
        case 'UPDATE-VIDEO-REACTION': {
            console.log('UPDATE-VIDEO-REACTION:', payload)
            if (!state.emojis[payload.emoji]) {
                state.emojis[payload.emoji] = 0
            }
            state.emojis[payload.emoji]++
            return { ...state, emojis: { ...state.emojis } }
        }
        case 'VIDEO-REACTION_FULFILLED': {
            console.log('VIDEO-REACTION_FULFILLED:', payload.data)
            if (!state.emojis[payload.data]) {
                state.emojis[payload.data] = 0
            }
            state.emojis[payload.data]++
            return { ...state, emojis: { ...state.emojis } }
        }
        default: {
            return state
        }
    }
}