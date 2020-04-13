import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import Message from '../message'
import send from '../svg/send.svg'
import axios from 'axios'

const Chat = () => {
    const token = useSelector(state => state.user.token)
    const [showChat, toggleChat] = useState(true)
    const chatInput = useRef()
    const messageList = useRef()
    const dispatch = useDispatch()
    // const socket = useSelector(state => state.socket)
    const { f_name, l_name } = useSelector(state => state.user)
    const messages = useSelector(state => state.messages)

    useEffect(() => {
        const onEnter = (e) => {
            if (e.keyCode === 13) {
                if (chatInput.current.value) {
                    const message = {
                        user: `${f_name} ${l_name}`,
                        text: chatInput.current.value,
                        time_stamp: new Date().toISOString()
                    }
                    dispatch({ type: 'NEW-MESSAGE', payload: message })
                    chatInput.current.value = ''
                }
                chatInput.current.focus()
            }
        }

        chatInput.current.addEventListener("keyup", onEnter)
    }, [dispatch, f_name, l_name])

    const handleSendMessage = () => {
        if (chatInput.current.value) {
            const message = {
                user: `${f_name} ${l_name}`,
                text: chatInput.current.value,
                time_stamp: new Date().toISOString()
            }
            axios.post('https://auhb4v0d92.execute-api.us-east-2.amazonaws.com/send-message', { message }, {
                headers: {
                    authorization: token
                }
            }).then((res) => {
                console.log(res)
                dispatch({ type: 'NEW-MESSAGE', payload: message })
            }).catch((error) => {
                console.log(error)
            })
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
                    return <Message key={i} message={message} name={`${f_name} ${l_name}`} />
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