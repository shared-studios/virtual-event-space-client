export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return { ...payload, viewers: payload.viewers + 1 }
        }
        case 'UPDATE-VIDEO-OFFSET': {
            console.log('UPDATE-VIDEO-OFFSET:', payload)
            const { segment_id, offset_value } = payload
            state.video_offset[segment_id] = offset_value
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