import io from 'socket.io-client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

const WebSocket = (props) => {
    const user = useSelector(state => state.user)
    const socket = useSelector(state => state.socket)
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io('localhost:5000', { query: { token: user.token.access_token } })
        socket.on('connect', () => {
            console.log('connected to web socket')
            dispatch({ type: "SOCKET-CONNECTION", payload: socket })
        })
        socket.on('disconnect', () => {
            console.log('disconnected from web socket')
        })
        socket.on('error', (error) => {
            if (error.code === '124' || error.message === 'Access token is expired.') {
                dispatch({ type: "AUTHENTICATED", payload: false })
            }
        })
        socket.on('users-and-rooms', (data) => {
            console.log('users-and-rooms from web socket', data)
        })
    }, [dispatch, user.token.access_token])

    return (
        <React.Fragment>
            {console.log('WebSocket')}
            {socket.connected ? props.children : <div>connecting to socket...</div>}
        </React.Fragment>
    )
}

export default React.memo(WebSocket)