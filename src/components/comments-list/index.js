import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Comment from '../comment-card'
import Message from './message-svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, postComment } from '../actions/comments'

const CommentsList = () => {
    const chatInput = useRef()
    const commentsList = useRef()
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(fetchComments())
        const onEnter = (e) => {
            if (e.keyCode === 13) {
                if (chatInput.current.value) {
                    dispatch(postComment(chatInput.current.value))
                    chatInput.current.value = ''
                }
                chatInput.current.focus()
            }
        }
        chatInput.current.addEventListener("keyup", onEnter)
    }, [dispatch])

    return (
        <div className={styles.comments}>
            {console.log('Comments')}
            <div className={styles.comment_input}>
                <input ref={chatInput} className={styles.input} placeholder="Add a public comment here..." />
                <Message className={styles.icon} />
            </div>
            <div className={styles.comments_list} ref={commentsList}>
                {comments.map((comment, i) => <Comment key={i} {...comment} />)}
            </div>
        </div>
    )
}

export default React.memo(CommentsList)