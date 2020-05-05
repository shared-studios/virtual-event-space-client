import React, { useEffect } from 'react';
import { socket } from '../custom-module'
import { useDispatch, useSelector } from 'react-redux'
import { onAgenda, onComment, onReaction, onVideoReaction, onOffset, onError, onDisconnect, onConnect } from '../actions/socket'

const Socket = (props) => {
    const dispatch = useDispatch()
    const { connected } = useSelector(state => state.socket)

    useEffect(() => {
        const ws = socket()
        ws.onConnect((e) => dispatch(onConnect(ws, e)))
        ws.onDisconnect((e) => dispatch(onDisconnect(e)))
        ws.onError((e) => dispatch(onError(e)))
        ws.on('comment', (data) => onComment(onError(data)))
        ws.on('agenda', (data) => dispatch(onAgenda(data)))
        ws.on('graduate-reaction', (data) => dispatch(onReaction(data)))
        ws.on('video-offset', (data) => dispatch(onOffset(data)))
        ws.on('video-reaction', (data) => dispatch(onVideoReaction(data)))
    }, [dispatch])

    return (
        <React.Fragment>
            {console.log('Socket')}
            {connected && props.children}
        </React.Fragment>
    )
}

export default React.memo(Socket)
