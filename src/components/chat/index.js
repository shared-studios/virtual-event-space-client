import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import Message from '../message'
import send from './send.svg'
import { fetchMessages, postMessage, newMessage } from '../actions/message'

const Chat = () => {
    const chatInput = useRef()
    const messageList = useRef()
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchMessages())
        const onEnter = (e) => {
            if (e.keyCode === 13) {
                if (chatInput.current.value) {
                    dispatch(postMessage(chatInput.current.value))
                    chatInput.current.value = ''
                }
                chatInput.current.focus()
            }
        }
        socket.on('message', (data) => {
            dispatch(newMessage(data))
        })

        chatInput.current.addEventListener("keyup", onEnter)
    }, [dispatch, socket])

    const handleSendMessage = () => {
        if (chatInput.current.value) {
            dispatch(postMessage(chatInput.current.value))
            chatInput.current.value = ''
        }
        chatInput.current.focus()
    }

    useEffect(() => {
        messageList.current.scrollTop = 0
    }, [messages])

    return (
        <div className={styles.chat}>
            <div className={styles.message_input}>
                <input
                    ref={chatInput}
                    className={styles.input}
                    placeholder="Type message here..."
                />
                <img alt='' src={send} className={styles.icon} onClick={handleSendMessage} />
            </div>
            <div className={styles.message_list} ref={messageList}>
                {messages.map((message, i) => <Message key={i} msg={message} />)}
            </div>
            {console.log('messagesssss')}
        </div>
    )
}

export default React.memo(Chat)