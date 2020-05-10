export default (state = { video_offset: [] }, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            console.log('payload', payload)
            return { ...payload, viewers: payload.viewers + 1 }
        }
        case 'UPDATE-VIDEO-OFFSET': {
            console.log('UPDATE-VIDEO-OFFSET:', payload)
            const { id, duration } = payload
            state.video_offset = state.video_offset.map((video) => {
                if (video.id === id) return { ...video, duration }
                return video
            })
            return { ...state }
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