export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return payload
        }
        case 'UPDATE-VIDEO-OFFSET': {
            console.log('UPDATE-VIDEO-OFFSET:', payload)
            return { ...state, video_offset: { ...state.video_offset, ...payload } }
        }
        default: {
            return state
        }
    }
}