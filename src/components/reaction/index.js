import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/student'
import { useDispatch } from 'react-redux'

const Reaction = ({ studentId }) => {
    const dispatch = useDispatch()

    const handleClick = (emoji) => {
        dispatch(sendReaction(studentId, emoji))
    }

    return (
        <div className={styles.reaction}>
            <button
                className={styles.button}
                onClick={() => handleClick('celebrate')}
            >
                <span role='img' aria-label="celebrate">🎉</span>
            </button>
            <button
                className={styles.button}
                onClick={() => handleClick('heart')}
            >
                <span role='img' aria-label="heart">♥️</span>
            </button>
            <button
                className={styles.button}
                onClick={() => handleClick('thumbs_up')}
            >
                <span role='img' aria-label="thumbs_up">👍</span>
            </button>
        </div>
    )
}

export default React.memo(Reaction)