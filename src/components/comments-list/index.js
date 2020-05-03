import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import Comment from '../comment-card'
import send from './send.svg'
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

    const handleSendComment = () => {
        if (chatInput.current.value) {
            dispatch(postComment(chatInput.current.value))
            chatInput.current.value = ''
        }
        chatInput.current.focus()
    }

    useEffect(() => {
        commentsList.current.scrollTop = 0
    }, [comments])

    return (
        <div className={styles.comments}>
            <div className={styles.comment_input}>
                <input
                    ref={chatInput}
                    className={styles.input}
                    placeholder="Add a public comment here..."
                />
                <img alt='' src={send} className={styles.icon} onClick={handleSendComment} />
            </div>
            <div className={styles.comments_list} ref={commentsList}>
                {comments.map((comment, i) => <Comment key={i} msg={comment} />)}
            </div>
            {console.log('Comments')}
        </div>
    )
}

export default React.memo(CommentsList)