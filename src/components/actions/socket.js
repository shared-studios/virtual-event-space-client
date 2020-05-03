export const onConnect = (socket) => {
    console.log('onConnect:', socket)
    return (dispatch) => dispatch({ type: 'SOCKET-CONNECTED', payload: socket })
}

export const onDisconnect = (e) => {
    console.log('onDisconnect:', e)
    return (dispatch) => dispatch({ type: 'SOCKET-DISCONNECTED', payload: e })
}

export const onError = (e) => {
    console.log('onError:', e)
    return (dispatch) => dispatch({ type: 'ERROR', payload: "Network error" })
}

export const onReaction = (data) => {
    return (dispatch) => dispatch({ type: 'UPDATE-GRADUATE-REACTION', payload: data })
}

export const onComment = (data) => {
    return (dispatch) => dispatch({ type: 'UPDATE-COMMENT', payload: data })
}

export const onAgenda = ({ agenda_id }) => {
    return (dispatch) => dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: agenda_id })
}

export const onOffset = (data) => {
    return (dispatch) => dispatch({ type: 'UPDATE-VIDEO-OFFSET', payload: data.index })
}
