export const onConnect = (socket) => {
    console.log('onConnect:', socket)
    return (dispatch) => dispatch({ type: 'SOCKET-CONNECTED', payload: socket })
}

export const onError = (e) => {
    console.log('onError:', e)
    return (dispatch) => dispatch({ type: 'ERROR', payload: "Network error" })
}

export const onMessage = (e) => {
    console.log('onMessage:', e)
    return (dispatch) => {
        const { data, action } = JSON.parse(e.data)
        if (action === 'comment') dispatch({ type: 'UPDATE-COMMENT', payload: data })
        if (action === 'agenda') dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: data })
        if (action === 'graduate-reaction') dispatch({ type: 'UPDATE-GRADUATE-REACTION', payload: data })
        if (action === 'video-offset') dispatch({ type: 'UPDATE-VIDEO-OFFSET', payload: data })
        if (action === 'video-reaction') dispatch({ type: 'UPDATE-VIDEO-REACTION', payload: data })
        if (action === 'viewers') dispatch({ type: 'UPDATE-EVENT-VIEWER', payload: data })
    }
}


