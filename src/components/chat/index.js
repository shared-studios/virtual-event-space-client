import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import Message from '../message'
import send from '../svg/send.svg'
import { fetchMessages } from '../actions/message-fetch'
import { postMessages } from '../actions/message-post'

const Chat = () => {
    const [showChat, toggleChat] = useState(true)
    const chatInput = useRef()
    const messageList = useRef()
    const dispatch = useDispatch()
    const { f_name, l_name } = useSelector(state => state.user)
    const messages = useSelector(state => state.messages)

    useEffect(() => {
        dispatch(fetchMessages())
        const onEnter = (e) => {
            if (e.keyCode === 13) {
                if (chatInput.current.value) {
                    dispatch(postMessages(chatInput.current.value))
                    chatInput.current.value = ''
                }
                chatInput.current.focus()
            }
        }

        chatInput.current.addEventListener("keyup", onEnter)
    }, [dispatch])

    const handleSendMessage = () => {
        if (chatInput.current.value) {
            dispatch(postMessages(chatInput.current.value))
            chatInput.current.value = ''
        }
        chatInput.current.focus()
    }

    useEffect(() => {
        messageList.current.scrollTop = messageList.current.scrollHeight
    }, [messages])

    return (
        <div className={styles.chat}>
            {console.log('messagesssss')}
            {showChat && <div className={styles.body} ref={messageList}>
                {messages.map((message, i) => {
                    return <Message key={i} msg={message} name={`${f_name} ${l_name}`} />
                })}
                <div className={styles.message_box}>
                    <input
                        ref={chatInput}
                        className={styles.input}
                        placeholder="Type message here..."
                    />
                    <img alt='' src={send} className={styles.icon} onClick={handleSendMessage} />
                </div>
            </div>}
            <button className={styles.toggle_chat} onClick={() => toggleChat((privState) => !privState)}>Chat</button>
        </div>
    )
}

export default React.memo(Chat)