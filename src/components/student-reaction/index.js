import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/current-student'
import { useSelector, useDispatch } from 'react-redux'
import emojiList from '../emojis.json'

const Reaction = ({ studentId }) => {
    const dispatch = useDispatch()
    const emojis = useSelector(state => state.current_student.emojis)
    const user = useSelector(state => state.user)

    return (
        <div className={styles.reaction}>
            <p className={styles.title}>SEND YOUR CONGRATULATIONS!</p>
            <div className={styles.emojis}>
                {emojiList.map(({ type, emoji }, i) => {
                    return (
                        <button
                            key={i}
                            className={styles.emoji}
                            onClick={() => dispatch(sendReaction(studentId, type))}
                            disabled={emojis?.[type]?.[user.id]}
                        >
                            <span role='img' aria-label={type}>{emoji}</span>
                        </button>
                    )
                })}
                {console.log('Reaction')}
            </div>
        </div>
    )
}

export default React.memo(Reaction)