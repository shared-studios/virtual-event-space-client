import { sendReaction } from './graduates'
import { fetchAgenda } from './agendas'
import emojis from '../emojis'

export const onConnect = (socket) => {
    console.log('onConnect:', socket)
    return (dispatch) => dispatch({ type: 'SOCKET-CONNECTED', payload: socket })
}

export const onError = (e) => {
    console.log('onError:', e)
    return (dispatch) => dispatch({ type: 'ERROR', payload: "Network error" })
}

export const onMessage = ({ data: message }) => {
    console.log('onMessage:', message)
    return (dispatch, getState) => {
        const { user: { user_id } } = getState()
        const { data, action } = JSON.parse(message)
        if (action === 'comment') dispatch({ type: 'UPDATE-COMMENT', payload: { comment: data, user_id } })
        if (action === 'agenda') dispatch(fetchAgenda(data))
        if (action === 'graduate-reaction') dispatch({ type: 'UPDATE-GRADUATE-REACTION', payload: data })
        if (action === 'video-offset') dispatch({ type: 'UPDATE-VIDEO-OFFSET', payload: data })
        if (action === 'video-reaction') dispatch({ type: 'UPDATE-VIDEO-REACTION', payload: data })
        if (action === 'viewers') dispatch({ type: 'UPDATE-EVENT-VIEWER', payload: data })
        if (action === 'trigger-emojis') emojis.list.forEach((type) => dispatch(sendReaction(data, type)))
    }
}