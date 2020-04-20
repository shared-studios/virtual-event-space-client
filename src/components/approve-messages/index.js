import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import ApproveMessage from '../approve-message'
import { fetchMessages, newMessage } from '../actions/message'
import { useDispatch, useSelector } from 'react-redux'

const ApproveMessages = () => {
    const messageList = useRef()
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchMessages())
        socket.on('message', (data) => {
            dispatch(newMessage(data))
        })
    }, [dispatch, socket])

    useEffect(() => {
        messageList.current.scrollTop = messageList.current.scrollHeight
    }, [messages])

    return (
        <div className={styles.messages} ref={messageList}>
            {console.log('messagesssss')}
            {messages.map((message, i) => <ApproveMessage key={i} msg={message} />)}
        </div >
    )
}

export default React.memo(ApproveMessages)